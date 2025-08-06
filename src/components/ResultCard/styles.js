import { StyleSheet } from "react-native";
import { colors } from "../../styles/calors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardBackground,
    borderRadius: 16,
    padding: 23,
  },
  lebel: {
    color: colors.textsecondary,
    marginBottom: 8,
    fontSize: 14,
  },
  amount: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 14,
  },
  rate: {
    color: colors.textsecondary,
    fontSize: 14,
  },
});
