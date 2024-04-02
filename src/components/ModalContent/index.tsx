import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { ModalContentProps } from "./types";
import { Container, Scroll, Header, Title, Pressable, Text } from "./styles";

export function ModalContent({ onClose, title, text }: ModalContentProps) {
  const THEME = useTheme();

  return (
    <Container>
      <Scroll>
        <Header>
          <Title>{title}</Title>

          <Pressable onPress={onClose}>
            <FontAwesome
              color={THEME.colors.light}
              name="close"
              size={RFValue(24)}
            />
          </Pressable>
        </Header>
        <Text>{text}</Text>
      </Scroll>
    </Container>
  );
}
