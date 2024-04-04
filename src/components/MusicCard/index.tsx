import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { MusicCardProps } from "./types";
import { Container, MusicInfo, Title, Subtitle } from "./styles";

export function MusicCard({ title, author }: MusicCardProps) {
  const THEME = useTheme();

  return (
    <Container>
      <MusicInfo>
        <Title>{title}</Title>
        <Subtitle>{author}</Subtitle>
      </MusicInfo>

      <MaterialIcons
        color={THEME.colors.primary}
        name="read-more"
        size={RFValue(42)}
      />
    </Container>
  );
}
