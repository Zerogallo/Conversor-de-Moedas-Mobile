export function covertCurrency(amount, rate) {
  return (parseFloat(amount) * rate).toFixed(2);
}
