import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { RepertoireProps } from "./types";
import { Container, MusicInfo, Title } from "./styles";

export function Repertoire({ title }: RepertoireProps) {
  const THEME = useTheme();

  return (
    <Container>
      <MusicInfo>
        <Title>{title}</Title>
      </MusicInfo>

      <MaterialIcons
        color={THEME.colors.light}
        name="read-more"
        size={RFValue(42)}
      />
    </Container>
  );
}
