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
    padding: 20,
    paddingBottom: 24,
  },
  header: {
    marginBottom: 12,
    flexDirection: "row",
  },
  title: {
    fontSize: 22,
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
  boxswap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  swapButton: {
    backgroundColor: colors.inputBackground,
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 24,
    margin: 20,
    top: 8,
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
    width: 100,
    height: 100,
    borderRadius: 12,
  },
  caixaImg: {
    alignItems: "center",
    justifyContent: "center",
    padding: 14,
  },
});
