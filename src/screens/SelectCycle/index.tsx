import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RadioButtonProps } from "react-native-radio-buttons-group";
import { Toast } from "react-native-toast-notifications";

import { Loading } from "../Loading";

import { Background } from "@/components/Background";
import { RadioButtons } from "@/components/RadioButtons";
import { radioButtonStyle } from "@/components/RadioButtons/styles";
import { NavigationFooter } from "@/components/NavigationFooter";

import { useAuth } from "@/hooks/useAuth";

import { getCycles } from "@/services/admins";
import { GetCyclesResponse } from "@/services/admins/types";

import { SelectCycleNavigationProps } from "./types";
import { Container, Content, Title, Subtitle, Text } from "./styles";

export function SelectCycle() {
  const [isLoading, setIsLoading] = useState(true);
  const [emptyResponse, setEmptyResponse] = useState(false);
  const [cycleSelectData, setCycleSelectData] = useState<RadioButtonProps[]>(
    []
  );
  const [selectedId, setSelectedId] = useState<string | undefined>();

  const navigation = useNavigation<SelectCycleNavigationProps>();
  const route = useRoute();

  const { user } = useAuth();

  const params = String(route.params);
  const { dioceseId } = user;

  function handleNext() {
    if (selectedId) {
      navigation.navigate("SelectCelebration", selectedId);
    } else {
      Toast.show("Você precisa selecionar uma opção.", { type: "warning" });
    }
  }

  async function loadScreen() {
    setIsLoading(true);

    try {
      const response = await getCycles(params, dioceseId);
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

        setCycleSelectData(radioButtonsData);
      } else {
        setEmptyResponse(true);
      }
    } catch (error) {
      Toast.show(
        "Houve um erro ao buscar os ciclos. Por favor, verifique sua conexão, ou tente novamente mais tarde.",
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
          <Title>SELECIONE O CICLO</Title>
          <Subtitle>TEMPO LITÚRGICO</Subtitle>

          <RadioButtons
            radioButtons={cycleSelectData}
            onPress={setSelectedId}
            selectedId={selectedId}
          />

          {emptyResponse && (
            <Text>
              Atualmente, não existem ciclos cadastrados para o ano selecionado.
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
