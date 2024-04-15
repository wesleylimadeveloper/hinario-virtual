import React, { useState } from "react";
import { Audio } from "expo-av";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { Toast } from "react-native-toast-notifications";
import { RFValue } from "react-native-responsive-fontsize";

import { RepertoireLyricProps } from "./types";
import {
  Button,
  ButtonText,
  ButtonWrapper,
  Content,
  ContentHeader,
  ContentHeaderTitle,
  SoundPressable,
  Text,
} from "./styles";

export function RepertoireMusicLyric({
  celebrationPart,
  music,
}: RepertoireLyricProps) {
  const [showLyrics, setShowLyrics] = useState(false);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlayingSound, setIsPlayingSound] = useState(false);

  const THEME = useTheme();

  async function handlePlaySound(url: string) {
    setIsPlayingSound(false);

    const { sound } = await Audio.Sound.createAsync({
      uri: `${process.env.EXPO_PUBLIC_API_URL}files/audios/${url}`,
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
    if (isPlayingSound) await handleStopSound();

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
            {music.audio &&
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
                <SoundPressable onPress={() => handlePlaySound(music.audio)}>
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

            <ContentHeaderTitle>
              {celebrationPart.part.description}
            </ContentHeaderTitle>
          </ContentHeader>

          <Text>{music.lyrics}</Text>
        </Content>
      )}
    </>
  );
}
