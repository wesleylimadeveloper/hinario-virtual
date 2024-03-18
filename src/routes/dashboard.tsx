import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components/native";

import { Home } from "../screens/Home";
import { SelectYear } from "../screens/SelectYear";

export function Dashboard() {
  const THEME = useTheme();

  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: THEME.colors.primary,
        },
        headerTintColor: THEME.colors.light,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: THEME.fonts.bold,
          fontSize: THEME.fontSize.larger,
        },
      }}
    >
      <Screen
        component={Home}
        name="Home"
        options={{
          headerShown: false,
        }}
      />

      <Screen
        component={SelectYear}
        name="SelectYear"
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
