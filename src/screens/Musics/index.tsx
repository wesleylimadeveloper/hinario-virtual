import React, { useCallback, useState } from "react";
import { Toast } from "react-native-toast-notifications";
import { useFocusEffect } from "@react-navigation/native";

import { Loading } from "../Loading";

import Input from "@/components/Input";
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
  Text,
} from "./styles";

export function Musics() {
  const [isLoading, setIsLoading] = useState(true);
  const [musics, setMusics] = useState<Music[]>([]);
  const [musicsList, setMusicsList] = useState<Music[]>([]);
  const [searchFieldValue, setSearchFieldValue] = useState("");
  const [listEmptyMessage, setListEmptyMessage] = useState(
    "Nenhuma música cadastrada no momento."
  );

  function handleSearchMusic(value: string) {
    if (!value.trim()) {
      setListEmptyMessage("Nenhuma música cadastrada no momento.");
      setMusicsList(musics);
    }

    setSearchFieldValue(value);

    const listCopy = [...musics];

    const filteredList = listCopy.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredList.length === 0 && value.trim())
      setListEmptyMessage("Nenhum resultado encontrado para esta pesquisa.");

    setMusicsList(filteredList);
  }

  async function loadScreen() {
    setIsLoading(true);

    try {
      const response = await getMusics();
      const data: GetMusicsResponse = response.data;

      setMusics(data.data);
      setMusicsList(data.data);
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

        <Input
          onChangeText={handleSearchMusic}
          placeholder="Pesquisar"
          searchable
          value={searchFieldValue}
        />

        <Subtitle>Galeria de Músicas</Subtitle>
      </Header>

      <List
        data={musicsList}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <ListSeparator />}
        ListEmptyComponent={() => <Text>{listEmptyMessage}</Text>}
        renderItem={({ item }) => <MusicCard {...item} />}
      />
    </Container>
  );
}
