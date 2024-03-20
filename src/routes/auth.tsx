import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components/native";

import { Login } from "../screens/Login";
import { ForgotPassword } from "../screens/ForgotPassword";
import { Register } from "../screens/Register";

export function Auth() {
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
        component={Login}
        name="Login"
        options={{
          headerShown: false,
        }}
      />

      <Screen
        component={ForgotPassword}
        name="ForgotPassword"
        options={{
          headerShown: false,
        }}
      />

      <Screen
        component={Register}
        name="Register"
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
