import React from "react";
import { useNavigation } from "@react-navigation/native";

import { RepertoireCardButton } from "../Buttons/RepertoireCardButton";

import { RepertoireCardNavigationProps, RepertoireCardProps } from "./types";
import {
  Container,
  MusicInfo,
  Title,
  Text,
  Musics,
  MusicTitle,
  Buttons,
} from "./styles";

export function RepertoireCard({
  id,
  repertoireCelebrationPartMusic,
  title,
}: RepertoireCardProps) {
  const navigation = useNavigation<RepertoireCardNavigationProps>();

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

        <Buttons>
          <RepertoireCardButton
            title="Letra"
            onPress={() => navigation.navigate("RepertoireLyric", { id })}
          />
          <RepertoireCardButton title="Cifra" />
          <RepertoireCardButton title="Partitura" />
          <RepertoireCardButton title="Slide" />
        </Buttons>
      </MusicInfo>
    </Container>
  );
}
