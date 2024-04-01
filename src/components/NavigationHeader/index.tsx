import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { Container, Pressable, Text } from "./styles";

export function NavigationHeader() {
  const navigation = useNavigation();

  const THEME = useTheme();

  return (
    <Container>
      <Pressable onPress={() => navigation.goBack()}>
        <Entypo color={THEME.colors.primary} name="chevron-left" size={24} />
      </Pressable>

      <Pressable onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </Pressable>
    </Container>
  );
}
