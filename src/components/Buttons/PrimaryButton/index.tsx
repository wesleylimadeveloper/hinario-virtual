import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";

import { ButtonProps } from "../types";
import { Container, Text } from "./styles";

export function PrimaryButton({
  title,
  color,
  textColor,
  disable,
  inactive,
  ...rest
}: ButtonProps) {
  const THEME = useTheme();

  return (
    <Container activeOpacity={0.7} color={color} disabled={disable} {...rest}>
      {inactive ? (
        <ActivityIndicator color={THEME.colors.light} />
      ) : (
        <Text textColor={textColor}>{title}</Text>
      )}
    </Container>
  );
}
