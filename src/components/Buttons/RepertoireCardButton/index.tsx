import React from "react";
import { useTheme } from "styled-components/native";

import { ButtonProps } from "../types";
import { Container, Text } from "./styles";

export function RepertoireCardButton({ title, ...rest }: ButtonProps) {
  const THEME = useTheme();

  return (
    <Container activeOpacity={0.7} {...rest}>
      <Text>{title}</Text>
    </Container>
  );
}
