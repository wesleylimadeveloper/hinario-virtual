import React, { useCallback, useState } from "react";
import { Toast } from "react-native-toast-notifications";
import { useFocusEffect } from "@react-navigation/native";

import { Loading } from "../Loading";

import { MusicCard } from "@/components/MusicCard";

import { getMusics } from "@/services/musics";
import { GetMusicsResponse, Music } from "@/services/musics/types";

import {
  Container,
  Header,
  Title,
  TitleMessage,
  Subtitle,
  List,
  ListSeparator,
} from "./styles";

export function Musics() {
  const [isLoading, setIsLoading] = useState(true);
  const [musics, setMusics] = useState<Music[]>([]);

  async function loadScreen() {
    setIsLoading(true);

    try {
      const response = await getMusics();
      const data: GetMusicsResponse = response.data;

      setMusics(data.data);
    } catch (error) {
      setMusics([]);

      Toast.show(
        "Houve um erro ao buscar as músicas. Por favor, verifique sua conexão, ou tente novamente mais tarde.",
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

  if (isLoading) return <Loading />;

  return (
    <Container>
      <Header>
        <Title>Músicas</Title>
        <TitleMessage>TODAS AS MÚSICAS DE NOSSO REPERTÓRIO</TitleMessage>

        <Subtitle>Galeria de Músicas</Subtitle>
      </Header>

      <List
        data={musics}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <ListSeparator />}
        renderItem={({ item }) => <MusicCard {...item} />}
      />
    </Container>
  );
}
