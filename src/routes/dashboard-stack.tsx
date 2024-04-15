import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components/native";

import { Home } from "@/screens/Home";
import { SelectYear } from "@/screens/SelectYear";
import { SelectCycle } from "@/screens/SelectCycle";
import { SelectCelebration } from "@/screens/SelectCelebration";
import { Music } from "@/screens/Music";

export function DashboardStack() {
  const THEME = useTheme();

  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
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
      <Screen component={Home} name="Home" />

      <Screen component={SelectYear} name="SelectYear" />

      <Screen component={SelectCycle} name="SelectCycle" />

      <Screen component={SelectCelebration} name="SelectCelebration" />

      <Screen component={Music} name="Music" />
    </Navigator>
  );
}
