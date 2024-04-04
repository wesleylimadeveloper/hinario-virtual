import React, { useCallback, useState } from "react";
import { Toast } from "react-native-toast-notifications";
import { useFocusEffect } from "@react-navigation/native";

import { Loading } from "../Loading";

import { Repertoire } from "@/components/Repertoire";

import { getRepertoires } from "@/services/repertoires";
import { GetRepertoiresResponse } from "@/services/repertoires/types";

import {
  Container,
  Header,
  Title,
  TitleMessage,
  List,
  ListSeparator,
} from "./styles";

export function Repertoires() {
  const [isLoading, setIsLoading] = useState(true);
  const [repertoires, setRepertoires] = useState<GetRepertoiresResponse[]>([]);

  async function loadScreen() {
    setIsLoading(true);

    try {
      const response = await getRepertoires();
      const data: GetRepertoiresResponse[] = response.data;

      setRepertoires(data);
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
      </Header>

      <List
        data={repertoires}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <ListSeparator />}
        renderItem={({ item }) => <Repertoire {...item} />}
      />
    </Container>
  );
}
