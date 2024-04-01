import React, { Fragment, useState } from "react";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { MusicDetailsProps } from "./types";
import {
  Title,
  ButtonWrapper,
  Button,
  ButtonText,
  Content,
  ContentHeader,
  ContentHeaderTitle,
  Pressable,
  Text,
} from "./styles";

export function MusicDetails({
  celebrationPartMusic,
  part,
}: MusicDetailsProps) {
  const [selectedMusics, setSelectedMusics] = useState<string[]>([]);

  const THEME = useTheme();

  function toggleMusicSelection(lyrics: string) {
    if (selectedMusics.includes(lyrics)) {
      setSelectedMusics(selectedMusics.filter((item) => item !== lyrics));
    } else {
      setSelectedMusics([...selectedMusics, lyrics]);
    }
  }

  return (
    <Fragment>
      <Title>{part.description}</Title>

      {celebrationPartMusic.map((item) => (
        <Fragment key={item.id}>
          <ButtonWrapper>
            <Button
              mp3={item.music.audio !== ""}
              onPress={() => toggleMusicSelection(item.music.lyrics)}
            >
              <ButtonText mp3={item.music.audio !== ""}>
                {item.music.title}
              </ButtonText>

              <Entypo
                style={{
                  position: "absolute",
                  right: 12,
                }}
                color={
                  item.music.audio !== ""
                    ? THEME.colors.primary
                    : THEME.colors.light
                }
                name={
                  selectedMusics.includes(item.music.lyrics)
                    ? "chevron-down"
                    : "chevron-right"
                }
                size={RFValue(24)}
              />
            </Button>
          </ButtonWrapper>

          {selectedMusics.includes(item.music.lyrics) && (
            <Content>
              <ContentHeader>
                <ContentHeaderTitle>{item.music.title}</ContentHeaderTitle>

                <Pressable>
                  <FontAwesome
                    color={THEME.colors.primary}
                    name="plus"
                    size={RFValue(16)}
                  />
                </Pressable>
              </ContentHeader>

              <Text>{item.music.lyrics}</Text>
            </Content>
          )}
        </Fragment>
      ))}
    </Fragment>
  );
}
