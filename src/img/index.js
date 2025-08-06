import { View } from "react-native";
import { styles } from "./styles";

export function Img() {
  return (
    <View>
      <Image style={styles.img} source={require("./galeria/image (5).jpg")} />
    </View>
  );
}
