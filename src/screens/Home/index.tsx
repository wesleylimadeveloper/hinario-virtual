import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import { PrimaryButton } from "../../components/Buttons/PrimaryButton";

import {
  Container,
  Header,
  Pressable,
  Info,
  Content,
  Title,
  Cursive,
  MessageWrapper,
  Text,
  ButtonWrapper,
} from "./styles";

export function Home() {
  const THEME = useTheme();

  return (
    <>
      <Container>
        <Header>
          <Pressable>
            <Ionicons color={THEME.colors.gray_light} name="menu" size={24} />
          </Pressable>

          <Info>
            <Pressable>
              <Ionicons
                color={THEME.colors.gray_light}
                name="notifications"
                size={18}
              />
            </Pressable>

            <Pressable>
              <FontAwesome5
                color={THEME.colors.gray_light}
                name="user-friends"
                size={18}
                style={{ marginLeft: 16 }}
              />
            </Pressable>
          </Info>
        </Header>

        <Content>
          <Title>VENHA PLANEJAR A</Title>
          <Cursive>Celebração!</Cursive>

          <MessageWrapper>
            <Text>Ferramenta de idealização da animação da celebração.</Text>
          </MessageWrapper>
        </Content>

        <ButtonWrapper>
          <PrimaryButton
            color={THEME.colors.primary_light}
            title="COMECE JÁ!"
          />
        </ButtonWrapper>
      </Container>
    </>
  );
}