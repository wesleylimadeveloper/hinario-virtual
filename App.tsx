import React from "react";
import { StatusBar } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { WindSong_500Medium } from "@expo-google-fonts/windsong";
import { ThemeProvider } from "styled-components/native";

import THEME from "./src/global/styles/theme";
import { Routes } from "./src/routes";

export default function App() {
  NavigationBar.setBackgroundColorAsync(THEME.colors.primary);

  let [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    WindSong_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeProvider theme={THEME}>
      <StatusBar backgroundColor={THEME.colors.primary} />
      <Routes />
    </ThemeProvider>
  );
}
