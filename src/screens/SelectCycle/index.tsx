import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RadioButtonProps } from "react-native-radio-buttons-group";
import { Toast } from "react-native-toast-notifications";
import Modal from "react-native-modal";

import { Loading } from "../Loading";

import { Background } from "@/components/Background";
import { ModalContent } from "@/components/ModalContent";
import { RadioButtons } from "@/components/RadioButtons";
import { radioButtonStyle } from "@/components/RadioButtons/styles";
import { NavigationFooter } from "@/components/NavigationFooter";

import { useAuth } from "@/hooks/useAuth";

import { getCycles } from "@/services/admins";
import { GetCyclesResponse } from "@/services/admins/types";

import { SelectCycleNavigationProps } from "./types";
import { Container, Content, Title, Pressable, Subtitle, Text } from "./styles";

export function SelectCycle() {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [emptyResponse, setEmptyResponse] = useState(false);
  const [cycleSelectData, setCycleSelectData] = useState<RadioButtonProps[]>(
    []
  );
  const [selectedId, setSelectedId] = useState<string | undefined>();

  const navigation = useNavigation<SelectCycleNavigationProps>();
  const route = useRoute();

  const THEME = useTheme();

  const { user } = useAuth();

  const params = String(route.params);
  const { dioceseId } = user;

  function handleNext() {
    if (selectedId) {
      const data = {
        yearID: params,
        cycleID: selectedId,
      };

      navigation.navigate("SelectCelebration", data);
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
        <Pressable onPress={() => setIsModalVisible(true)}>
          <MaterialIcons
            color={THEME.colors.light}
            name="info-outline"
            size={RFValue(24)}
          />
        </Pressable>

        <Content>
          <Title>SELECIONE O CICLO</Title>

          <Modal
            animationIn={"fadeInUpBig"}
            animationOut={"fadeOutDownBig"}
            isVisible={isModalVisible}
            onBackdropPress={() => setIsModalVisible(false)}
          >
            <ModalContent
              onClose={() => setIsModalVisible(false)}
              title="TEMPO LITÚRGICO"
              text="O objetivo do tempo litúrgico é permitir que os fiéis mergulhem profundamente na história da salvação, revivendo e refletindo sobre os principais eventos da vida de Cristo e sua relevância espiritual. Cada período litúrgico tem suas próprias práticas, símbolos e cores litúrgicas para ajudar os crentes a se conectar mais profundamente com sua fé e sua jornada espiritual."
            />
          </Modal>

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
