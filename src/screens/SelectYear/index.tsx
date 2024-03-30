import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { RadioButtonProps } from "react-native-radio-buttons-group";
import { Toast } from "react-native-toast-notifications";

import { Loading } from "../Loading";

import { Background } from "@/components/Background";
import { RadioButtons } from "@/components/RadioButtons";
import { radioButtonStyle } from "@/components/RadioButtons/styles";
import { NavigationFooter } from "@/components/NavigationFooter";

import { getYears } from "@/services/admins";
import { GetYearsResponse } from "@/services/admins/types";

import { SelectYearNavigationProps } from "./types";
import { Container, Content, Title, Subtitle } from "./styles";

export function SelectYear() {
  const [isLoading, setIsLoading] = useState(true);
  const [yearSelectData, setYearSelectData] = useState<RadioButtonProps[]>([]);
  const [selectedId, setSelectedId] = useState<string | undefined>();

  const navigation = useNavigation<SelectYearNavigationProps>();

  function handleNext() {
    if (selectedId) {
      navigation.navigate("SelectCycle", selectedId);
    } else {
      Toast.show("Você precisa selecionar uma opção.", { type: "warning" });
    }
  }

  async function loadScreen() {
    setIsLoading(true);

    try {
      const response = await getYears();
      const data: GetYearsResponse[] = response.data;

      if (data.length > 0) {
        const radioButtonsData: RadioButtonProps[] = [];

        data.map((year) => {
          radioButtonsData.push({
            id: year.id,
            label: year.description,
            value: year.id,
            ...radioButtonStyle,
          });
        });

        setYearSelectData(radioButtonsData);
      }
    } catch (error) {
      Toast.show(
        "Houve um erro ao buscar os anos. Por favor, verifique sua conexão, ou tente novamente mais tarde.",
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
          <Title>SELECIONE O ANO</Title>
          <Subtitle>ANO LITÚRGICO</Subtitle>

          <RadioButtons
            radioButtons={yearSelectData}
            onPress={(item) => setSelectedId(item)}
            selectedId={selectedId}
          />
        </Content>

        <NavigationFooter
          onPrevious={() => navigation.goBack()}
          onNext={handleNext}
        />
      </Background>
    </Container>
  );
}
