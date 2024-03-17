import React from "react";

import { ButtonProps } from "../types";
import { Container, Text } from "./styles";

export function LinkButton({ title = "", ...rest }: ButtonProps) {
  return (
    <Container activeOpacity={0.7} {...rest}>
      <Text>{title}</Text>
    </Container>
  );
}
