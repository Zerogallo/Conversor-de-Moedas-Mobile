import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

export function Button({
  variant = "primary",
  onPress,
  currency,
  icon,
  img,
  label,
  isSelected,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        isSelected &&
          (variant === "primary"
            ? styles.buttonPrimary
            : styles.buttonSecondary),
      ]}
    >
      <View style={styles.boxButton}>
        <Text style={styles.buttonText}>{label}</Text>
        <Ionicons name={icon} style={styles.icon}></Ionicons>
        <Image source={img} />
      </View>
    </TouchableOpacity>
  );
}
