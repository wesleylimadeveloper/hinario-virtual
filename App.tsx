import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";

import THEME from "./src/global/styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <View style={styles.container}>
        <StatusBar backgroundColor={THEME.colors.primary} />
        <Text style={styles.text}>Hinário Virtual</Text>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: THEME.colors.light,
    fontSize: THEME.fontSize.normal,
    fontWeight: "bold",
  },
});
