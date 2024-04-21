import React, { useState } from "react";
import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { useTheme } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Toast } from "react-native-toast-notifications";

import { useRepertoire } from "@/hooks/useRepertoire";

import { MusicLyricsProps } from "./types";
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

export function MusicLyrics(props: MusicLyricsProps) {
  const [showLyrics, setShowLyrics] = useState(false);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlayingSound, setIsPlayingSound] = useState(false);

  const THEME = useTheme();

  const { addMusicToRepertoire } = useRepertoire();

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
    if (isPlayingSound) {
      await handleStopSound();
    }

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
