import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";

import { MusicCardNavigationProps, MusicCardProps } from "./types";
import { Container, MusicInfo, Title, Subtitle } from "./styles";

export function MusicCard({ id, title, author }: MusicCardProps) {
  const THEME = useTheme();

  const navigation = useNavigation<MusicCardNavigationProps>();

  return (
    <Container onPress={() => navigation.navigate("MusicDetails", { id })}>
      <MusicInfo>
        <Title>{title}</Title>
        <Subtitle>{author}</Subtitle>
      </MusicInfo>

      <Entypo
        color={THEME.colors.primary}
        name="chevron-right"
        size={RFValue(24)}
      />
    </Container>
  );
}
