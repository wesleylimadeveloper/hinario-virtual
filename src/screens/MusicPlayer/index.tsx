import React, { useEffect, useState } from "react";
import { AVPlaybackStatus, Audio } from "expo-av";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import Slider from "@react-native-community/slider";

import { NavigationHeader } from "@/components/NavigationHeader";

import { MusicPlayerRouteProps } from "./types";
import {
  Container,
  Content,
  Player,
  Title,
  Subtitle,
  MinutesInfo,
  Text,
} from "./styles";

export function MusicPlayer() {
  const [playbackObj, setPlaybackObj] = useState<Audio.Sound | null>(null);
  const [soundObj, setSoundObj] = useState<AVPlaybackStatus | null>(null);
  const [playbackDuration, setPlaybackDuration] = useState<number | null>(null);
  const [playbackPosition, setPlaybackPosition] = useState<number | null>(null);

  const navigation = useNavigation();
  const route = useRoute();

  const THEME = useTheme();

  const params: MusicPlayerRouteProps = route.params as MusicPlayerRouteProps;

  const { title, author, audio } = params.music;

  async function onPlaybackStatusUpdate(playbackStatus: AVPlaybackStatus) {
    if (playbackStatus.isLoaded && playbackStatus.isPlaying) {
      setPlaybackDuration(playbackStatus.durationMillis);
      setPlaybackPosition(playbackStatus.positionMillis);
    }

    if (playbackStatus.isLoaded && playbackStatus.didJustFinish) {
      setPlaybackPosition(0);
      navigation.goBack();
    }
  }

  async function pauseAudio() {
    const status = await playbackObj.setStatusAsync({ shouldPlay: false });
    setSoundObj(status);
  }

  async function resumeAudio() {
    const status = await playbackObj.playAsync();
    setSoundObj(status);
  }

  async function handlePressAudio() {
    if (soundObj?.isLoaded && soundObj?.isPlaying) await pauseAudio();

    if (soundObj?.isLoaded && !soundObj?.isPlaying) await resumeAudio();
  }

  function calculateMusicMinutes(audioLength: number) {
    const seconds = Math.floor(audioLength / 1000);

    const minutes = Math.floor(seconds / 60);

    const secondsRemaining = seconds % 60;

    const formattedTime = `${minutes
      .toString()
      .padStart(2, "0")}:${secondsRemaining.toString().padStart(2, "0")}`;

    return formattedTime;
  }

  async function onSliderChange(newPosition: number) {
    await playbackObj.setStatusAsync({
      positionMillis: newPosition,
    });

    setPlaybackPosition(newPosition);
  }

  async function handleGoBack() {
    await playbackObj.stopAsync();
    navigation.goBack();
  }

  async function loadScreen() {
    const playbackObj = new Audio.Sound();

    const status = await playbackObj.loadAsync(
      {
        uri: `${process.env.EXPO_PUBLIC_API_URL}files/audios/${audio}`,
      },
      { shouldPlay: true }
    );

    setPlaybackObj(playbackObj);
    setSoundObj(status);

    return playbackObj.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
  }

  useEffect(() => {
    loadScreen();
  }, []);

  return (
    <Container>
      <NavigationHeader onBack={handleGoBack} />

      <Content>
        <Player>
          <FontAwesome
            color={THEME.colors.primary}
            name="music"
            size={RFValue(128)}
          />
          <Title>{title}</Title>

          <Subtitle>{author}</Subtitle>

          <Slider
            style={{ height: 48, width: "100%" }}
            onValueChange={onSliderChange}
            maximumTrackTintColor={THEME.colors.gray_dark}
            maximumValue={playbackDuration}
            minimumTrackTintColor={THEME.colors.primary}
            minimumValue={0}
            thumbTintColor={THEME.colors.primary}
            value={playbackPosition}
          />

          <MinutesInfo>
            <Text>{calculateMusicMinutes(Number(playbackPosition))}</Text>

            <Text>{calculateMusicMinutes(Number(playbackDuration))}</Text>
          </MinutesInfo>

          <Ionicons
            onPress={handlePressAudio}
            color={THEME.colors.primary}
            name={
              soundObj?.isLoaded && soundObj?.isPlaying
                ? "pause-circle"
                : "play-circle"
            }
            size={RFValue(96)}
          />
        </Player>
      </Content>
    </Container>
  );
}
