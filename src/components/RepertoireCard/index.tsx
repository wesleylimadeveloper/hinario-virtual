import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { RepertoireCardProps } from "./types";
import {
  Container,
  MusicInfo,
  Title,
  Text,
  Musics,
  MusicTitle,
} from "./styles";

export function RepertoireCard({
  repertoireCelebrationPartMusic,
  title,
}: RepertoireCardProps) {
  const THEME = useTheme();

  return (
    <Container>
      <MusicInfo>
        <Title>{title}</Title>
        <Text>
          Ano: {""}
          {
            repertoireCelebrationPartMusic[0]?.celebrationPartMusic
              ?.celebrationPart?.year?.description
          }
        </Text>
        <Text>
          Ciclo: {""}
          {
            repertoireCelebrationPartMusic[0]?.celebrationPartMusic
              ?.celebrationPart?.cycle?.description
          }
        </Text>
        <Text>
          Celebração: {""}
          {
            repertoireCelebrationPartMusic[0]?.celebrationPartMusic
              ?.celebrationPart?.celebration?.description
          }
        </Text>

        <Musics>
          {repertoireCelebrationPartMusic.map((music, index) => (
            <MusicTitle key={music.celebrationPartMusic?.music.id}>
              {index + 1}. {music.celebrationPartMusic?.music.title};{" "}
            </MusicTitle>
          ))}
        </Musics>
      </MusicInfo>

      <Entypo
        color={THEME.colors.light}
        name="chevron-right"
        size={RFValue(24)}
      />
    </Container>
  );
}
