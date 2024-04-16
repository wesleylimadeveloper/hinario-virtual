import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { PrimaryButton } from "../Buttons/PrimaryButton";

import { CelebrationModalProps } from "./types";
import {
  Container,
  Scroll,
  Header,
  CelebrationInfo,
  Pressable,
  Text,
  Title,
  ButtonWrapper,
} from "./styles";

export function CelebrationModal({ onClose }: CelebrationModalProps) {
  const THEME = useTheme();

  return (
    <Container>
      <Scroll>
        <Header>
          <Pressable onPress={onClose}>
            <FontAwesome
              color={THEME.colors.light}
              name="close"
              size={RFValue(24)}
            />
          </Pressable>
        </Header>

        <CelebrationInfo>
          <Text>Ano: A</Text>
          <Text>Ciclo: Ciclo do Natal</Text>
          <Text>Celebração: 1º Dom Advento</Text>
        </CelebrationInfo>

        <Title>ESTRUTURA</Title>
        <Text>MÓDULOS DA CELEBRAÇÃO</Text>

        <Title>Canto de Entrada</Title>
        <Title>Ato Penitencial</Title>
        <Title>Aspersão</Title>

        <ButtonWrapper>
          <PrimaryButton
            title="Salvar Repertório"
            color={THEME.colors.light}
            textColor={THEME.colors.primary}
          />
        </ButtonWrapper>
      </Scroll>
    </Container>
  );
}
