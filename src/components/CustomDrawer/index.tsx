import { useState } from "react";
import Constants from "expo-constants";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import {
  DrawerItem,
  DrawerItemList,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

import { Alert } from "../Alert";

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
  const [isModalVisible, setIsModalVisible] = useState(false);
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
          onPress={() => setIsModalVisible(true)}
        />

        {isModalVisible && (
          <Alert
            title="Sair"
            message="Sair da sua conta?"
            cancelButtonText="Não"
            confirmButtonText="Sim"
            onCancel={() => setIsModalVisible(false)}
            onConfirm={() => handleLogout()}
          />
        )}
      </DrawerContentScrollView>

      <DrawerFooter>
        <Version>Versão {versionCode}</Version>
      </DrawerFooter>
    </Container>
  );
}
