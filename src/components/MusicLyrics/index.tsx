import React, { useState } from "react";
import Constants from "expo-constants";
import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { useTheme } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Toast } from "react-native-toast-notifications";

import { MusicLyricsProps } from "./types";
import {
  Button,
  ButtonText,
  ButtonWrapper,
  Content,
  ContentHeader,
  ContentHeaderTitle,
  Pressable,
  SoundPressable,
  Text,
} from "./styles";

export function MusicLyrics(props: MusicLyricsProps) {
  const [showLyrics, setShowLyrics] = useState(false);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlayingSound, setIsPlayingSound] = useState(false);

  const THEME = useTheme();

  const { BASE_URL } = Constants.expoConfig.extra;

  async function handlePlaySound(URL: string) {
    setIsPlayingSound(false);

    const { sound } = await Audio.Sound.createAsync({
      uri: `${BASE_URL}files/audios/${URL}`,
    });

    setSound(sound);

    try {
      await sound.playAsync();
      setIsPlayingSound(true);
    } catch (error) {
      Toast.show("Erro ao reproduzir o áudio.");
    }
  }

  async function handleStopSound() {
    if (sound) {
      try {
        await sound.stopAsync();
        await sound.unloadAsync();
        setIsPlayingSound(false);
      } catch (error) {
        Toast.show("Erro ao parar o áudio.");
      }
    }
  }

  async function handleShowLyrics() {
    if (isPlayingSound) {
      await handleStopSound();
    }

    setShowLyrics(!showLyrics);
  }

  return (
    <>
      <ButtonWrapper>
        <Button mp3={props.music.audio !== ""} onPress={handleShowLyrics}>
          <ButtonText mp3={props.music.audio !== ""}>
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

            <Pressable>
              <FontAwesome
                color={THEME.colors.primary}
                name="plus"
                size={RFValue(16)}
              />
            </Pressable>
          </ContentHeader>

          {props.music.audio &&
            (isPlayingSound ? (
              <SoundPressable onPress={() => handleStopSound()}>
                <Ionicons
                  style={{
                    marginBottom: 4,
                  }}
                  color={THEME.colors.primary}
                  name="stop-circle"
                  size={RFValue(48)}
                />
              </SoundPressable>
            ) : (
              <SoundPressable
                onPress={() => handlePlaySound(props.music.audio)}
              >
                <Ionicons
                  style={{
                    marginBottom: 4,
                  }}
                  color={THEME.colors.primary}
                  name="play-circle"
                  size={RFValue(48)}
                />
              </SoundPressable>
            ))}

          <Text>{props.music.lyrics}</Text>
        </Content>
      )}
    </>
  );
}
