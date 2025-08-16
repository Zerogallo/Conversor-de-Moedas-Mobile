import { StyleSheet } from "react-native";
import { colors } from "../../styles/calors";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.inputBackground,
    paddingHorizontal: 16,
    paddingVertical: 8,
    margin: 4,
    borderRadius: 8,
  },
  buttonText: {
    color: colors.text,
    fontWeight: "500",
    margin: 5,
    fontSize: 20,
  },
  boxButton: {
    flexDirection: "row",
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
  },
  buttonSecondary: {
    backgroundColor: colors.secondary,
  },
  icon: {
    fontSize: 20,
    color: colors.text,
    top: 16,
  },
});
