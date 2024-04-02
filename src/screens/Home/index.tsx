import React from "react";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { PrimaryButton } from "@/components/Buttons/PrimaryButton";

import { HomeNavigationProps } from "./types";
import {
  Container,
  Content,
  Logo,
  Title,
  Cursive,
  MessageWrapper,
  Text,
  ButtonWrapper,
} from "./styles";

export function Home() {
  const THEME = useTheme();

  const navigation = useNavigation<HomeNavigationProps>();

  const dioceseImage = require("@/assets/diocese.png");

  return (
    <>
      <Container>
        <Content>
          <Logo resizeMode="contain" source={dioceseImage} />

          <Title>VENHA PLANEJAR A</Title>
          <Cursive>Celebração!</Cursive>

          <MessageWrapper>
            <Text>Ferramenta de idealização da animação da celebração.</Text>
          </MessageWrapper>
        </Content>

        <ButtonWrapper>
          <PrimaryButton
            color={THEME.colors.primary_light}
            onPress={() => navigation.navigate("SelectYear")}
            title="COMECE JÁ!"
          />
        </ButtonWrapper>
      </Container>
    </>
  );
}
