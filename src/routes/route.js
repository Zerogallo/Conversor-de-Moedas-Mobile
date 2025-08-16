import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import { MyTabs } from "./bottom.routes";

const Stack = createNativeStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyTabs" component={MyTabs} />
    </Stack.Navigator>
  );
}
