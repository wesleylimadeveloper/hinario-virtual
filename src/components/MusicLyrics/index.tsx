import React, { useState } from "react";
import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { useRepertoire } from "@/hooks/useRepertoire";

import { MusicLyricsNavigationProps, MusicLyricsProps } from "./types";
import {
  Button,
  ButtonText,
  ButtonWrapper,
  Content,
  ContentHeader,
  ContentHeaderTitle,
  Audio,
  Text,
} from "./styles";

export function MusicLyrics(props: MusicLyricsProps) {
  const [showLyrics, setShowLyrics] = useState(false);

  const navigation = useNavigation<MusicLyricsNavigationProps>();

  const THEME = useTheme();

  const { addMusicToRepertoire } = useRepertoire();

  async function handleShowLyrics() {
    setShowLyrics(!showLyrics);
  }

  function handleAddMusicToRepertoire() {
    setShowLyrics(false);
    addMusicToRepertoire(props);
  }

  return (
    <>
      <ButtonWrapper>
        <Button required={!props.required} onPress={handleShowLyrics}>
          <ButtonText required={!props.required}>
            {props.music.title}
          </ButtonText>

          <Entypo
            style={{
              position: "absolute",
              right: 12,
            }}
            color={
              props.music.audio !== ""
                ? THEME.colors.primary
                : THEME.colors.light
            }
            name={showLyrics ? "chevron-down" : "chevron-right"}
            size={RFValue(24)}
          />
        </Button>
      </ButtonWrapper>

      {showLyrics && (
        <Content>
          <ContentHeader>
            <ContentHeaderTitle>{props.music.title}</ContentHeaderTitle>
            <FontAwesome
              onPress={handleAddMusicToRepertoire}
              color={THEME.colors.primary}
              name="plus"
              size={RFValue(16)}
            />
          </ContentHeader>

          {props.music.audio && (
            <Audio>
              <Text>Ouvir</Text>
              <Ionicons
                onPress={() =>
                  navigation.navigate("MusicPlayer", { music: props.music })
                }
                color={THEME.colors.primary}
                name="play-circle"
                size={RFValue(36)}
              />
            </Audio>
          )}

          <Text>{props.music.lyrics}</Text>
        </Content>
      )}
    </>
  );
}
