import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components/native";

import { CustomDrawer } from "@/components/CustomDrawer";

import { DashboardStack } from "./dashboard-stack";
import { RepertoireStack } from "./repertoire-stack";
import { MusicStack } from "./music-stack";
import { Orientations } from "@/screens/Orientations";

export function Dashboard() {
  const THEME = useTheme();

  const { Navigator, Screen } = createDrawerNavigator();

  return (
    <Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: THEME.colors.light,
        drawerActiveTintColor: THEME.colors.primary,
        drawerStyle: {
          backgroundColor: THEME.colors.primary,
          width: "70%",
        },
        drawerInactiveTintColor: THEME.colors.light,
        drawerLabelStyle: {
          fontFamily: THEME.fonts.medium,
        },
        drawerType: "slide",
        headerRightContainerStyle: {
          paddingRight: 24,
        },
        headerStyle: {
          backgroundColor: THEME.colors.primary,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: THEME.colors.gray_light,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: THEME.fonts.bold,
          fontSize: RFValue(16),
        },
      }}
    >
      <Screen
        component={DashboardStack}
        name="DashboardStack"
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="play-outline" color={color} size={size} />
          ),
          headerTitle: "Hinário",
          title: "Comece Já",
        }}
      />

      <Screen
        component={RepertoireStack}
        name="RepertoireStack"
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="albums-outline" color={color} size={size} />
          ),
          title: "Repertórios",
        }}
      />

      <Screen
        component={MusicStack}
        name="MusicStack"
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="musical-notes" color={color} size={size} />
          ),
          title: "Músicas",
        }}
      />

      <Screen
        component={Orientations}
        name="Orientations"
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="compass-outline" color={color} size={size} />
          ),
          title: "Orientações",
        }}
      />
    </Navigator>
  );
}
