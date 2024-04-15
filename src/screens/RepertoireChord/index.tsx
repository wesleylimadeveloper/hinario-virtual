import React, { useCallback, useState } from "react";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { Toast } from "react-native-toast-notifications";

import { Loading } from "../Loading";

import { NavigationHeader } from "@/components/NavigationHeader";
import { RepertoireMusicLyric } from "@/components/RepertoireMusicLyric";

import { getRepertoireByID } from "@/services/repertoires";
import { GetRepertoiresResponse } from "@/services/repertoires/types";

import { RepertoireChordRouteProps } from "./types";
import {
  Container,
  Content,
  Title,
  TitleMessage,
  Subtitle,
  Text,
  List,
  InfoTitle,
} from "./styles";

export function RepertoireChord() {
  const [loading, setIsLoading] = useState(true);
  const [repertoire, setRepertoire] = useState({} as GetRepertoiresResponse);

  const route = useRoute();

  const params: RepertoireChordRouteProps =
    route.params as RepertoireChordRouteProps;

  async function loadScreen() {
    setIsLoading(true);

    try {
      const response = await getRepertoireByID(params.id);

      const data: GetRepertoiresResponse = response.data;

      setRepertoire(data);
    } catch (error) {
      Toast.show(
        "Houve um erro ao buscar a cifra. Por favor, verifique sua conexão, ou tente novamente mais tarde.",
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

      <Content>
        <Title>{repertoire.title}</Title>
        <TitleMessage>
          Repertório criado por {repertoire.createdByUser.name}
        </TitleMessage>

        <Subtitle>Informações</Subtitle>
        <Text>
          <InfoTitle>Ano: </InfoTitle>
          {
            repertoire.repertoireCelebrationPartMusic[0]?.celebrationPartMusic
              ?.celebrationPart?.year?.description
          }
        </Text>
        <Text>
          <InfoTitle>Ciclo: </InfoTitle>
          {
            repertoire.repertoireCelebrationPartMusic[0]?.celebrationPartMusic
              ?.celebrationPart?.cycle?.description
          }
        </Text>
        <Text>
          <InfoTitle>Celebração: </InfoTitle>
          {
            repertoire.repertoireCelebrationPartMusic[0]?.celebrationPartMusic
              ?.celebrationPart?.celebration?.description
          }
        </Text>
      </Content>

      <List
        data={repertoire.repertoireCelebrationPartMusic}
        keyExtractor={(item) => item.celebrationPartMusicId}
        renderItem={({ item }) => (
          <RepertoireMusicLyric {...item.celebrationPartMusic} />
        )}
      />
    </Container>
  );
}
