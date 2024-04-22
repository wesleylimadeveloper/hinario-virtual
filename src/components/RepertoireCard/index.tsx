import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Toast } from "react-native-toast-notifications";

import { RepertoireCardButton } from "../Buttons/RepertoireCardButton";
import { Alert } from "../Alert";

import { deleteRepertoire } from "@/services/repertoires";

import { RepertoireCardNavigationProps, RepertoireCardProps } from "./types";
import {
  Container,
  MusicInfo,
  Header,
  Title,
  Text,
  Musics,
  MusicTitle,
  Buttons,
} from "./styles";

export function RepertoireCard({
  id,
  onRefresh,
  repertoireCelebrationPartMusic,
  title,
}: RepertoireCardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigation = useNavigation<RepertoireCardNavigationProps>();

  const THEME = useTheme();

  async function handleConfirmDelete() {
    try {
      const response = await deleteRepertoire(id);

      if (response.status === 200) setIsModalVisible(false);

      Toast.show("Repertório excluído com sucesso!", {
        duration: 5000,
        type: "success",
      });

      await onRefresh();
    } catch (error) {
      Toast.show(
        "Houve um erro ao excluir o repositório. Por favor, verifique sua conexão, ou tente novamente mais tarde.",
        { duration: 5000, type: "danger" }
      );
    }
  }

  return (
    <Container>
      <MusicInfo>
        <Header>
          <Title>{title}</Title>

          <FontAwesome
            color={THEME.colors.light}
            name="trash"
            onPress={() => setIsModalVisible(true)}
            size={24}
          />
        </Header>
        <Text>
          Ano: {""}
          {
            repertoireCelebrationPartMusic[0]?.celebrationPartMusic
              ?.celebrationPart?.year?.description
          }
        </Text>
        <Text>
          Ciclo: {""}
          {
            repertoireCelebrationPartMusic[0]?.celebrationPartMusic
              ?.celebrationPart?.cycle?.description
          }
        </Text>
        <Text>
          Celebração: {""}
          {
            repertoireCelebrationPartMusic[0]?.celebrationPartMusic
              ?.celebrationPart?.celebration?.description
          }
        </Text>

        <Musics>
          {repertoireCelebrationPartMusic.map((music, index) => (
            <MusicTitle key={music.celebrationPartMusicId}>
              {index + 1}. {music.celebrationPartMusic?.music.title};{" "}
            </MusicTitle>
          ))}
        </Musics>

        <Buttons>
          <RepertoireCardButton
            title="Letra"
            onPress={() => navigation.navigate("RepertoireLyric", { id })}
          />
          <RepertoireCardButton
            title="Cifra"
            onPress={() => navigation.navigate("RepertoireChord", { id })}
          />
          <RepertoireCardButton
            title="Partitura"
            onPress={() => navigation.navigate("RepertoireSheet", { id })}
          />
          <RepertoireCardButton title="Slide" />
        </Buttons>
      </MusicInfo>

      {isModalVisible && (
        <Alert
          title="Você tem certeza?"
          message={`Você está deletando o repertório ${title}. Não será possível recuperá-lo posteriormente.`}
          cancelButtonText="Não"
          confirmButtonText="Sim"
          onCancel={() => setIsModalVisible(false)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </Container>
  );
}
