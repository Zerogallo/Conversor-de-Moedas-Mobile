import { StyleSheet } from "react-native";
import { colors } from "../../styles/calors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    padding: 80,
    paddingBottom: 24,
  },
  header: {
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 8,
  },
  subTitle: {
    color: colors.textsecondary,
    fontSize: 16,
  },
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
  },
  label: {
    color: colors.textsecondary,
    marginBottom: 8,
    fontSize: 14,
  },
  currencyGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -4,
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  swapButton: {
    backgroundColor: colors.inputBackground,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 24,
  },
  swapButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
  coverterButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 24,
  },
  coverterButtonDisabled: {
    backgroundColor: colors.disabled,
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 12,
  },
  caixaImg: {
    alignItems: "center",
    justifyContent: "center",
    padding: 14,
  },
});
