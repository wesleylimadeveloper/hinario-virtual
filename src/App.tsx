import React from "react";
import { StatusBar } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import * as ScreenOrientation from "expo-screen-orientation";
import {
  useFonts,
  Raleway_500Medium,
  Raleway_500Medium_Italic,
  Raleway_800ExtraBold,
} from "@expo-google-fonts/raleway";
import { ThemeProvider } from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ToastProvider } from "react-native-toast-notifications";
import { RFValue } from "react-native-responsive-fontsize";

import THEME from "@/global/styles/theme";
import { AuthProvider } from "@/hooks/useAuth";

import { Routes } from "@/routes";

export default function App() {
  NavigationBar.setBackgroundColorAsync(THEME.colors.primary);

  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);

  let [fontsLoaded, fontError] = useFonts({
    Carabella_Regular: require("@/assets/fonts/CarabellaRegular.ttf"),
    Raleway_500Medium,
    Raleway_500Medium_Italic,
    Raleway_800ExtraBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={THEME}>
        <ToastProvider
          animationDuration={100}
          animationType="zoom-in"
          duration={3500}
          placement="top"
          textStyle={{
            fontSize: RFValue(12),
            fontFamily: THEME.fonts.medium,
            textAlign: "center",
          }}
          dangerColor={THEME.colors.danger}
          successColor={THEME.colors.success}
          warningColor={THEME.colors.warning}
        >
          <AuthProvider>
            <StatusBar backgroundColor={THEME.colors.primary} />
            <Routes />
          </AuthProvider>
        </ToastProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
