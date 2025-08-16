import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import Detals from "../pages/Datals";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../styles/calors";

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.inputBackground },
      }}
      initialRouteName="Conversor"
    >
      <Tab.Screen
        name="Conversor"
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
            top: -50,

            color: colors.background,
          },
          tabBarIconStyle: {
            top: -20,
            backgroundColor: colors.primary,
            borderRadius: "50%",
            width: 80,
            height: 80,
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
            top: -50,

            color: colors.background,
          },
          tabBarIconStyle: {
            top: -20,
            backgroundColor: colors.primary,
            borderRadius: "50%",
            width: 80,
            height: 80,
          },
        }}
      />
    </Tab.Navigator>
  );
}
