import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function ResultCard({
  exchangeRate,
  result,
  fromCurrency,
  toCurrency,
  currencies,
}) {
  if (!result || !exchangeRate) return null;

  const toSymbol = currencies.find(
    (currency) => currency.code === toCurrency
  ).symbol;

  const toImg = currencies.find((currency) => currency.code === toCurrency).img;

  return (
    <View style={styles.container}>
      <Text style={styles.lebel}>Resultado:</Text>
      <View style={styles.botText}>
        <Text style={styles.amount}>
          {toSymbol}
          {result}
        </Text>
        <Image source={toImg} style={styles.boximg} />
      </View>
      <Text style={styles.rate}>
        Taxa de cambio 1: {fromCurrency} = {exchangeRate.toFixed(4)}{" "}
        {toCurrency}
      </Text>
    </View>
  );
}
