import { KeyboardAvoidingView, ScrollView, View } from "react-native";

import Home from "./src/pages/Home";

export default function App() {
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View>
          <Home />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
