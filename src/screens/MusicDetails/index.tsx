import React, { useCallback, useState } from "react";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { Toast } from "react-native-toast-notifications";

import { Loading } from "../Loading";

import { NavigationHeader } from "@/components/NavigationHeader";
import { PrimaryButton } from "@/components/Buttons/PrimaryButton";

import { getMusicByID } from "@/services/musics";
import { GetMusicByIDResponse } from "@/services/musics/types";

import { MusicDetailsRouteProps } from "./types";
import {
  Container,
  Carousel,
  Scroll,
  Content,
  Title,
  Subtitle,
  Text,
} from "./styles";

export function MusicDetails() {
  const [loading, setIsLoading] = useState(true);
  const [music, setMusic] = useState({} as GetMusicByIDResponse);
  const [filterSelected, setFilterSelected] = useState(1);

  const route = useRoute();

  const THEME = useTheme();

  const params: MusicDetailsRouteProps = route.params as MusicDetailsRouteProps;

  const FILTERS = [
    {
      id: 1,
      description: "Cifra",
    },
    {
      id: 2,
      description: "Letra",
    },
    {
      id: 3,
      description: "Tablatura",
    },
  ];

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

  useFocusEffect(
    useCallback(() => {
      loadScreen();
    }, [])
  );

  if (loading) return <Loading />;

  return (
    <Container>
      <NavigationHeader />

      <Carousel
        data={FILTERS}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PrimaryButton
            title={item.description}
            onPress={() => setFilterSelected(item.id)}
            color={filterSelected !== item.id && THEME.colors.light}
            textColor={filterSelected !== item.id && THEME.colors.primary}
          />
        )}
      />

      <Scroll>
        <Content>
          {filterSelected === 1 || filterSelected === 2 ? (
            <>
              <Title>{music.title}</Title>
              <Subtitle>Autor: {music.author}</Subtitle>

              <Text>{music.lyrics}</Text>
            </>
          ) : (
            <Text>Essa música não possui tablatura.</Text>
          )}
        </Content>
      </Scroll>
    </Container>
  );
}
