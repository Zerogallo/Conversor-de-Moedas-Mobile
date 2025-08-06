import { Text, View } from "react-native";
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

  return (
    <View style={styles.container}>
      <Text style={styles.lebel}>Resultado:</Text>
      <Text style={styles.amount}>
        {toSymbol}
        {result}
      </Text>
      <Text style={styles.rate}>
        Taxa de cambio 1: {fromCurrency} = {exchangeRate.toFixed(4)}
        {toCurrency}
      </Text>
    </View>
  );
}
