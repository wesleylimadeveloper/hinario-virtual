import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RadioButtonProps } from "react-native-radio-buttons-group";
import { Toast } from "react-native-toast-notifications";

import { Background } from "@/components/Background";
import { RadioButtons } from "@/components/RadioButtons";
import { radioButtonStyle } from "@/components/RadioButtons/styles";
import { NavigationFooter } from "@/components/NavigationFooter";

import { Loading } from "../Loading";

import { useAuth } from "@/hooks/useAuth";

import { getCelebrations } from "@/services/admins";
import { GetCyclesResponse } from "@/services/admins/types";

import {
  SelectCelebrationNavigationProps,
  SelectCelebrationRouteProps,
} from "./types";
import { Container, Content, Title, Subtitle, Text } from "./styles";

export function SelectCelebration() {
  const [isLoading, setIsLoading] = useState(true);
  const [emptyResponse, setEmptyResponse] = useState(false);
  const [celebrationSelectData, setCelebrationSelectData] = useState<
    RadioButtonProps[]
  >([]);
  const [selectedId, setSelectedId] = useState<string | undefined>();

  const navigation = useNavigation<SelectCelebrationNavigationProps>();
  const route = useRoute();

  const { user } = useAuth();
  const params = route.params as SelectCelebrationRouteProps;

  const { yearID, cycleID } = params;
  const { dioceseId } = user;

  function handleNext() {
    if (selectedId) {
      return;
    } else {
      Toast.show("Você precisa selecionar uma opção.", { type: "warning" });
    }
  }

  async function loadScreen() {
    setIsLoading(true);

    try {
      const response = await getCelebrations(yearID, cycleID, dioceseId);
      const data: GetCyclesResponse[] = response.data;

      if (data.length > 0) {
        const radioButtonsData: RadioButtonProps[] = [];

        data.map((cycle) => {
          radioButtonsData.push({
            id: cycle.id,
            label: cycle.description,
            value: cycle.id,
            ...radioButtonStyle,
          });
        });

        setCelebrationSelectData(radioButtonsData);
      } else {
        setEmptyResponse(true);
      }
    } catch (error) {
      Toast.show(
        "Houve um erro ao buscar as celebrações. Por favor, verifique sua conexão, ou tente novamente mais tarde.",
        { duration: 5000, type: "danger" }
      );
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadScreen();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <Container>
      <Background>
        <Content>
          <Title>SELECIONE A CELEBRAÇÃO</Title>
          <Subtitle>ANO LITÚRGICO</Subtitle>

          <RadioButtons
            radioButtons={celebrationSelectData}
            onPress={setSelectedId}
            selectedId={selectedId}
          />

          {emptyResponse && (
            <Text>
              Atualmente, não existem celebrações cadastradas para o ciclo
              selecionado.
            </Text>
          )}
        </Content>

        <NavigationFooter
          onPrevious={() => navigation.goBack()}
          onNext={handleNext}
        />
      </Background>
    </Container>
  );
}
