import Constants from "expo-constants";
import { FontAwesome } from "@expo/vector-icons";
import {
  DrawerItem,
  DrawerItemList,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import { useAuth } from "@/hooks/useAuth";

import { CustomDrawerNavigationProps } from "./types";
import {
  Container,
  Header,
  Logo,
  MessageWrapper,
  Greeting,
  UserName,
  DrawerFooter,
  Version,
} from "./styles";

export function CustomDrawer(props: DrawerContentComponentProps) {
  const navigation = useNavigation<CustomDrawerNavigationProps>();

  const THEME = useTheme();

  const { logout, user } = useAuth();
  const { name } = user;

  const { manifest2 } = Constants;

  async function handleLogout() {
    navigation.navigate("Home");
    await logout();
  }

  const versionCode = manifest2.extra.expoClient.version;

  return (
    <Container>
      <DrawerContentScrollView {...props}>
        <Header>
          <Logo resizeMode="center" source={require("@/assets/diocese.png")} />

          <MessageWrapper>
            <Greeting>Olá,</Greeting>
            <UserName>{name}</UserName>
          </MessageWrapper>
        </Header>

        <DrawerItemList {...props} />

        <DrawerItem
          icon={({ size }) => (
            <FontAwesome
              name="sign-out"
              color={THEME.colors.light}
              size={size}
            />
          )}
          label="Sair"
          labelStyle={{
            color: THEME.colors.light,
            fontFamily: THEME.fonts.medium,
          }}
          onPress={() => handleLogout()}
        />
      </DrawerContentScrollView>

      <DrawerFooter>
        <Version>Versão {versionCode}</Version>
      </DrawerFooter>
    </Container>
  );
}
