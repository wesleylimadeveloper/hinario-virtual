import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";

import { ButtonProps } from "../types";
import { Container, Text } from "./styles";

export function PrimaryButton({
  title = "",
  disable,
  inactive,
  ...rest
}: ButtonProps) {
  const THEME = useTheme();

  return (
    <Container activeOpacity={0.7} disabled={disable} {...rest}>
      {inactive ? (
        <ActivityIndicator color={THEME.colors.light} />
      ) : (
        <Text>{title}</Text>
      )}
    </Container>
  );
}
