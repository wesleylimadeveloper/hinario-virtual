import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components/native";

import { RepertoireDetails } from "@/screens/RepertoireDetails";
import { Repertoires } from "@/screens/Repertoires";

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

      <Screen component={RepertoireDetails} name="RepertoireDetails" />
    </Navigator>
  );
}
