import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "./src/components/Button/index";
import { styles } from "./App.styles";
import { currencies } from "./src/constants/currencies";
import { Input } from "./src/components/input/index";
import { ResultCard } from "./src/components/ResultCard";
import { exchangeRateApi } from "./src/services/api";
import { useState } from "react";
import { covertCurrency } from "./src/utils/covertCurrency";

export default function App() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("BRL");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(null);

  async function fetchExvhangeRate() {
    try {
      setLoading(true);

      const data = await exchangeRateApi(fromCurrency);
      const rate = data.rates[toCurrency];
      setExchangeRate(rate);
      const covertEdAmount = covertCurrency(amount, rate);
      setResult(covertEdAmount);
    } catch (erro) {
      alert("rro, tente novamente");
    } finally {
      setLoading(false);
    }
  }
  function swapCurrency() {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setResult("");
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.os === "ios" ? "padding" : "height"}
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <StatusBar style="light" />

          <View style={styles.header}>
            <View style={styles.caixaImg}>
              <Image
                style={styles.img}
                source={require("./src/img/galeria/image (5).jpg")}
              />
            </View>
            <View style={styles.caixaImg}>
              <Text style={styles.title}>Conversor de Moedas</Text>
              <Text style={styles.subTitle}>
                Converta Valores entre diferentes moedas
              </Text>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>De:</Text>
            <View style={styles.currencyGrid}>
              {currencies.map((currency) => (
                <Button
                  variant="primary"
                  key={currency.code}
                  currency={currency}
                  onPress={() => setFromCurrency(currency.code)}
                  isSelected={fromCurrency === currency.code}
                ></Button>
              ))}
            </View>

            <View>
              <Input label={"Valor:"} value={amount} onChangeText={setAmount} />

              <TouchableOpacity
                style={styles.swapButton}
                onPress={swapCurrency}
              >
                <Text style={styles.swapButtonText}>↑↓</Text>
              </TouchableOpacity>

              <Text style={styles.label}>Para:</Text>
              <View style={styles.currencyGrid}>
                {currencies.map((currency) => (
                  <Button
                    variant="secondary"
                    key={currency.code}
                    currency={currency}
                    onPress={() => setToCurrency(currency.code)}
                    isSelected={toCurrency === currency.code}
                  ></Button>
                ))}
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={[
              styles.coverterButton,
              (!amount || loading) && styles.coverterButtonDisabled,
            ]}
            onPress={fetchExvhangeRate}
            disabled={!amount || loading}
          >
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={styles.swapButtonText}>Converter</Text>
            )}
          </TouchableOpacity>

          <ResultCard
            exchangeRate={exchangeRate}
            result={result}
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
            currencies={currencies}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
