import React from "react";
import { StatusBar } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import {
  useFonts,
  Raleway_500Medium,
  Raleway_800ExtraBold,
} from "@expo-google-fonts/raleway";
import { ThemeProvider } from "styled-components/native";

import THEME from "./global/styles/theme";
import { Routes } from "./routes";

export default function App() {
  NavigationBar.setBackgroundColorAsync(THEME.colors.primary);

  let [fontsLoaded, fontError] = useFonts({
    Carabella_Regular: require("./assets/fonts/CarabellaRegular.ttf"),
    Raleway_500Medium,
    Raleway_800ExtraBold,
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
