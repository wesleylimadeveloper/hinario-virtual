import React, { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RadioButtonProps } from "react-native-radio-buttons-group";
import { Toast } from "react-native-toast-notifications";
import BottomSheet from "@gorhom/bottom-sheet";

import { Loading } from "../Loading";

import { Background } from "@/components/Background";
import { RadioButtons } from "@/components/RadioButtons";
import { radioButtonStyle } from "@/components/RadioButtons/styles";
import { NavigationFooter } from "@/components/NavigationFooter";
import { PartInfoBottomSheet } from "@/components/PartInfoBottomSheet";

import { getYears } from "@/services/admins";
import { GetYearsResponse } from "@/services/admins/types";

import { SelectYearNavigationProps } from "./types";
import { Container, Content, Title, Subtitle } from "./styles";

export function SelectYear() {
  const [isLoading, setIsLoading] = useState(true);
  const [yearSelectData, setYearSelectData] = useState<RadioButtonProps[]>([]);
  const [selectedId, setSelectedId] = useState<string | undefined>();

  const partInfoBottomSheetRef = useRef<BottomSheet>(null);

  const navigation = useNavigation<SelectYearNavigationProps>();

  const THEME = useTheme();

  function handleOpenBottomSheet() {
    partInfoBottomSheetRef.current?.expand();
  }

  function handleCloseBottomSheet() {
    partInfoBottomSheetRef.current?.close();
  }

  function handleNext() {
    if (selectedId) {
      navigation.navigate("SelectCycle", selectedId);
    } else {
      Toast.show("Você precisa selecionar uma opção.", {
        textStyle: {
          color: THEME.colors.dark,
        },
        type: "warning",
      });
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
        <MaterialIcons
          style={{
            position: "absolute",
            right: 32,
            top: 32,
          }}
          onPress={handleOpenBottomSheet}
          color={THEME.colors.light}
          name="info-outline"
          size={RFValue(24)}
        />

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

      <PartInfoBottomSheet
        ref={partInfoBottomSheetRef}
        title="ANO LITÚRGICO"
        text="O ano litúrgico é um ciclo de celebrações religiosas na Igreja Católica que reconta e comemora os principais eventos da vida de Jesus Cristo, desde o seu nascimento até a sua ressurreição e sua futura vinda como Rei. Ele começa com o tempo do Advento, aproximadamente quatro semanas antes do Natal, e termina com a Solenidade de Cristo Rei, no ano civil seguinte. O ano litúrgico é dividido em três ciclos: A, B e C, cada um dos quais se concentra em um dos Evangelhos sinópticos (Mateus, Marcos e Lucas) e lê as principais passagens das Escrituras que narram a história da salvação. Essa divisão permite que os fiéis percorram, ao longo dos anos, toda a vida de Jesus e compreendam a importância dos eventos religiosos em suas vidas. Além disso, os tempos litúrgicos ajudam os crentes a transcender o tempo cronológico e entrar no kairos, o tempo da graça de Deus, renovando a fé e a esperança na salvação."
        onClose={handleCloseBottomSheet}
      />
    </Container>
  );
}
