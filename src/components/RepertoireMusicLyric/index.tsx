import React, { useState } from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { RepertoireLyricProps, RepertoireLyricsNavigationProps } from "./types";
import {
  Button,
  ButtonText,
  ButtonWrapper,
  Content,
  ContentHeader,
  Audio,
  ContentHeaderTitle,
  Text,
} from "./styles";

export function RepertoireMusicLyric({
  celebrationPart,
  music,
}: RepertoireLyricProps) {
  const [showLyrics, setShowLyrics] = useState(false);

  const navigation = useNavigation<RepertoireLyricsNavigationProps>();

  const THEME = useTheme();

  async function handleShowLyrics() {
    setShowLyrics(!showLyrics);
  }

  return (
    <>
      <ButtonWrapper>
        <Button onPress={handleShowLyrics}>
          <ButtonText>{music.title}</ButtonText>

          <Entypo
            style={{
              position: "absolute",
              right: 12,
            }}
            color={THEME.colors.light}
            name={showLyrics ? "chevron-down" : "chevron-right"}
            size={RFValue(24)}
          />
        </Button>
      </ButtonWrapper>

      {showLyrics && (
        <Content>
          <ContentHeader>
            <ContentHeaderTitle>
              {celebrationPart.part.description}
            </ContentHeaderTitle>

            {music.audio && (
              <Audio>
                <Text>Ouvir</Text>
                <Ionicons
                  onPress={() =>
                    navigation.navigate("MusicPlayer", { music: music })
                  }
                  color={THEME.colors.primary}
                  name="play-circle"
                  size={RFValue(36)}
                />
              </Audio>
            )}
          </ContentHeader>

          <Text>{music.lyrics}</Text>
        </Content>
      )}
    </>
  );
}
