import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import { NavigationFooterProps } from "./types";
import {
  Container,
  Buttons,
  PreviousButton,
  PreviousButtonText,
  NextButton,
  NextButtonText,
} from "./styles";

export function NavigationFooter({
  onPrevious,
  onNext,
}: NavigationFooterProps) {
  const THEME = useTheme();

  return (
    <Container>
      <Buttons>
        <PreviousButton onPress={onPrevious}>
          <Entypo
            color={THEME.colors.gray_light}
            name="chevron-left"
            size={16}
          />
          <PreviousButtonText>voltar</PreviousButtonText>
        </PreviousButton>

        <NextButton onPress={onNext}>
          <NextButtonText>próximo</NextButtonText>
          <Entypo color={THEME.colors.light} name="chevron-right" size={24} />
        </NextButton>
      </Buttons>
    </Container>
  );
}
