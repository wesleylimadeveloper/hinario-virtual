import React, { useEffect, useRef, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RadioButtonProps } from "react-native-radio-buttons-group";
import { Toast } from "react-native-toast-notifications";
import BottomSheet from "@gorhom/bottom-sheet";

import { Background } from "@/components/Background";
import { RadioButtons } from "@/components/RadioButtons";
import { radioButtonStyle } from "@/components/RadioButtons/styles";
import { NavigationFooter } from "@/components/NavigationFooter";
import { PartInfoBottomSheet } from "@/components/PartInfoBottomSheet";

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

  const partInfoBottomSheetRef = useRef<BottomSheet>(null);

  const navigation = useNavigation<SelectCelebrationNavigationProps>();
  const route = useRoute();

  const THEME = useTheme();

  const { user } = useAuth();
  const params = route.params as SelectCelebrationRouteProps;

  const { yearID, cycleID } = params;
  const { dioceseId } = user;

  function handleOpenBottomSheet() {
    partInfoBottomSheetRef.current?.expand();
  }

  function handleCloseBottomSheet() {
    partInfoBottomSheetRef.current?.close();
  }

  function handleNext() {
    if (selectedId) {
      const data = {
        yearID,
        cycleID,
        celebrationID: selectedId,
      };

      navigation.navigate("Part", data);
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
      const response = await getCelebrations(yearID, cycleID, dioceseId);
      const data: GetCyclesResponse[] = response.data;

      if (data.length > 0) {
        const radioButtonsData: RadioButtonProps[] = [];

        data.map((celebration) => {
          radioButtonsData.push({
            id: celebration.id,
            label: celebration.description,
            value: celebration.id,
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

      <PartInfoBottomSheet
        ref={partInfoBottomSheetRef}
        title="CELEBRAÇÃO"
        text="Na celebração, Deus se revela para a assembleia litúrgica numa “passagem” (Páscoa) libertadora em nossas vidas. Os discípulos de hoje recobram e reavivam a chama da fé, da esperança e do amor na medida em que percebem a ação do Espírito do Ressuscitado e descobrem o sentido dos acontecimentos. A Liturgia é um memorial, no qual Deus se faz presente na comunidade e age nos ritos sagrados por meio de Cristo. Sendo assim, o canto litúrgico alcança seu sentido quando é sintonizado e acompanha harmoniosamente os ritos da celebração, sem se desviar do verdadeiro sentido de cada momento da celebração. O importante é cantar a Liturgia, e não simplesmente cantar na Liturgia, como tantas vezes acontece quando o gosto pessoal dos cantores prevalece."
        onClose={handleCloseBottomSheet}
      />
    </Container>
  );
}
