import React, { useCallback, useState } from "react";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { Audio } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { Toast } from "react-native-toast-notifications";

import { Loading } from "../Loading";

import { NavigationHeader } from "@/components/NavigationHeader";

import { getMusicByID } from "@/services/musics";
import { GetMusicByIDResponse } from "@/services/musics/types";

import { MusicDetailsRouteProps } from "./types";
import {
  Container,
  Scroll,
  Content,
  Subtitle,
  Text,
  Title,
  SoundPressable,
} from "./styles";

export function MusicDetails() {
  const [loading, setIsLoading] = useState(true);
  const [music, setMusic] = useState({} as GetMusicByIDResponse);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlayingSound, setIsPlayingSound] = useState(false);

  const THEME = useTheme();

  const route = useRoute();

  const params: MusicDetailsRouteProps = route.params as MusicDetailsRouteProps;

  async function loadScreen() {
    setIsLoading(true);

    try {
      const response = await getMusicByID(params.id);

      const data: GetMusicByIDResponse = response.data;

      setMusic(data);
    } catch (error) {
      Toast.show(
        "Houve um erro ao buscar a música. Por favor, verifique sua conexão, ou tente novamente mais tarde.",
        { duration: 5000, type: "danger" }
      );
    } finally {
      setIsLoading(false);
    }
  }

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

  useFocusEffect(
    useCallback(() => {
      loadScreen();
    }, [])
  );

  if (loading) return <Loading />;

  return (
    <Container>
      <NavigationHeader />

      <Scroll>
        <Content>
          <Title>{music.title}</Title>
          <Subtitle>Autor: {music.author}</Subtitle>

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

          <Text>{music.lyrics}</Text>
        </Content>
      </Scroll>
    </Container>
  );
}
