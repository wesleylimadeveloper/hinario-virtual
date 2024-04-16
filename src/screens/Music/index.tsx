import React, { useEffect, useState } from "react";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { useRoute } from "@react-navigation/native";
import { Toast } from "react-native-toast-notifications";
import { RFValue } from "react-native-responsive-fontsize";
import Modal from "react-native-modal";

import { Loading } from "../Loading";

import { NavigationHeader } from "@/components/NavigationHeader";
import { MusicDetails } from "@/components/MusicDetails";
import { PrimaryButton } from "@/components/Buttons/PrimaryButton";
import { CelebrationModal } from "@/components/CelebrationModal";

import { useAuth } from "@/hooks/useAuth";

import { getParts } from "@/services/musics";
import { GetPartsResponse } from "@/services/musics/types";

import { MusicRouteProps } from "./types";
import {
  ButtonWrapper,
  Container,
  IconContainer,
  Pressable,
  EmptyComponent,
  List,
  Text,
} from "./styles";

export function Music() {
  const [isLoading, setIsLoading] = useState(true);
  const [requestError, setRequestError] = useState(false);
  const [parts, setParts] = useState<GetPartsResponse[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const route = useRoute();

  const THEME = useTheme();

  const { user } = useAuth();
  const params = route.params as MusicRouteProps;

  const { yearID, cycleID, celebrationID } = params;
  const { dioceseId } = user;

  async function loadScreen() {
    setIsLoading(true);
    setRequestError(false);

    try {
      const response = await getParts(
        yearID,
        cycleID,
        dioceseId,
        celebrationID
      );
      const data: GetPartsResponse[] = response.data;

      setParts(data);
    } catch (error) {
      setRequestError(true);
      setParts([]);

      Toast.show(
        "Houve um erro ao buscar as músicas da celebração. Por favor, verifique sua conexão, ou tente novamente mais tarde.",
        { duration: 5000, type: "danger" }
      );
    } finally {
      setIsLoading(false);
    }
  }

  function renderEmptyComponent() {
    return (
      <EmptyComponent>
        {requestError ? (
          <MaterialIcons
            style={{
              marginTop: "50%",
            }}
            color={THEME.colors.primary}
            name="music-off"
            size={RFValue(128)}
          />
        ) : (
          <Entypo
            style={{
              marginTop: "50%",
            }}
            color={THEME.colors.primary}
            name="folder-music"
            size={RFValue(128)}
          />
        )}

        {requestError ? (
          <ButtonWrapper>
            <PrimaryButton
              onPress={loadScreen}
              title="Recarregar e tentar novamente"
            />
          </ButtonWrapper>
        ) : (
          <Text>
            Atualmente, não há músicas disponíveis que correspondam aos
            critérios de busca selecionados
          </Text>
        )}
      </EmptyComponent>
    );
  }

  useEffect(() => {
    loadScreen();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <Container>
      <NavigationHeader />

      <IconContainer>
        <Pressable onPress={() => setIsModalVisible(true)}>
          <MaterialIcons
            color={THEME.colors.primary}
            name="info-outline"
            size={RFValue(24)}
          />
        </Pressable>
      </IconContainer>

      <List
        contentContainerStyle={{
          paddingHorizontal: RFValue(16),
        }}
        data={parts}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => renderEmptyComponent()}
        renderItem={({ item }) => <MusicDetails {...item} />}
      />

      <Modal
        animationIn={"fadeInUpBig"}
        animationOut={"fadeOutDownBig"}
        isVisible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
      >
        <CelebrationModal onClose={() => setIsModalVisible(false)} />
      </Modal>
    </Container>
  );
}
