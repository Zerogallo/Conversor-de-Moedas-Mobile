import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import Detals from "../pages/Datals";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../styles/calors";

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "sync-circle" : "sync-circle-outline"}
              size={30}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: "bold",
            color: colors.background,
          },
        }}
      />
      <Tab.Screen
        name="Detals"
        component={Detals}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "stats-chart" : "stats-chart-outline"}
              size={30}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: "bold",
            color: colors.background,
          },
        }}
      />
    </Tab.Navigator>
  );
}
