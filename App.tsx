import React from "react";
import { StatusBar } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { ThemeProvider } from "styled-components/native";

import THEME from "./src/global/styles/theme";
import { Login } from "./src/screens/Login";
import { Routes } from "./src/routes";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
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
