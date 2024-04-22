import React, { useCallback, useState } from "react";
import { Toast } from "react-native-toast-notifications";
import { useFocusEffect } from "@react-navigation/native";

import { Loading } from "../Loading";

import Input from "@/components/Input";
import { RepertoireCard } from "@/components/RepertoireCard";

import { getRepertoires } from "@/services/repertoires";
import { GetRepertoiresResponse } from "@/services/repertoires/types";

import {
  Container,
  Header,
  Title,
  TitleMessage,
  List,
  ListSeparator,
  Text,
} from "./styles";

export function Repertoires() {
  const [isLoading, setIsLoading] = useState(true);
  const [repertoires, setRepertoires] = useState<GetRepertoiresResponse[]>([]);
  const [repertoiresList, setRepertoiresList] = useState<
    GetRepertoiresResponse[]
  >([]);
  const [searchFieldValue, setSearchFieldValue] = useState("");
  const [listEmptyMessage, setListEmptyMessage] = useState(
    "Nenhum repertório cadastrado no momento."
  );

  function handleSearchRepertoire(value: string) {
    if (!value.trim()) {
      setListEmptyMessage("Nenhum repertório cadastrado no momento.");
      setRepertoiresList(repertoires);
    }

    setSearchFieldValue(value);

    const listCopy = [...repertoires];

    const filteredList = listCopy.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredList.length === 0 && value.trim())
      setListEmptyMessage("Nenhum resultado encontrado para esta pesquisa.");

    setRepertoiresList(filteredList);
  }

  async function loadScreen() {
    setIsLoading(true);

    try {
      const response = await getRepertoires();
      const data: GetRepertoiresResponse[] = response.data;

      setRepertoires(data);
      setRepertoiresList(data);
    } catch (error) {
      setRepertoires([]);

      Toast.show(
        "Houve um erro ao buscar os repertórios. Por favor, verifique sua conexão, ou tente novamente mais tarde.",
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
        <Title>Repertórios</Title>
        <TitleMessage>TODAS AS SUAS CELEBRAÇÕES</TitleMessage>

        <Input
          onChangeText={handleSearchRepertoire}
          placeholder="Pesquisar"
          searchable
          value={searchFieldValue}
        />
      </Header>

      <List
        data={repertoiresList}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <ListSeparator />}
        ListEmptyComponent={() => <Text>{listEmptyMessage}</Text>}
        renderItem={({ item }) => (
          <RepertoireCard onRefresh={loadScreen} {...item} />
        )}
      />
    </Container>
  );
}
