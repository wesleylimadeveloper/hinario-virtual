import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components/native";

import { Musics } from "@/screens/Musics";
import { MusicDetails } from "@/screens/MusicDetails";

export function MusicStack() {
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
      <Screen component={Musics} name="Musics" />

      <Screen component={MusicDetails} name="MusicDetails" />
    </Navigator>
  );
}
