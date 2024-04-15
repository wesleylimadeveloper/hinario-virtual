import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components/native";

import { Repertoires } from "@/screens/Repertoires";
import { RepertoireLyric } from "@/screens/RepertoireLyric";
import { RepertoireChord } from "@/screens/RepertoireChord";
import { RepertoireSheet } from "@/screens/RepertoireSheet";

export function RepertoireStack() {
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
      <Screen component={Repertoires} name="Repertoires" />

      <Screen component={RepertoireLyric} name="RepertoireLyric" />

      <Screen component={RepertoireChord} name="RepertoireChord" />

      <Screen component={RepertoireSheet} name="RepertoireSheet" />
    </Navigator>
  );
}
