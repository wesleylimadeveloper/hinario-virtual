import React from "react";

import { BackgroundProps } from "./types";
import { Container } from "./styles";

export function Background({ children }: BackgroundProps) {
  const imageBackground = require("@/assets/background.png");

  return (
    <Container resizeMode="stretch" source={imageBackground}>
      {children}
    </Container>
  );
}
