import React, { useMemo, useState } from "react";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { RadioButtonProps } from "react-native-radio-buttons-group";

import { Background } from "../../components/Background";
import { RadioButtons } from "../../components/RadioButtons";
import { radioButtonStyle } from "../../components/RadioButtons/styles";
import { NavigationFooter } from "../../components/NavigationFooter";

import { SelectCycleNavigationProps } from "./types";
import { Container, Content, Title, Subtitle } from "./styles";

export function SelectCycle() {
  const [selectedId, setSelectedId] = useState<string | undefined>();

  const THEME = useTheme();

  const navigation = useNavigation<SelectCycleNavigationProps>();

  const radioButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        id: "1",
        label: "Ciclo do Natal",
        value: "1",
        ...radioButtonStyle,
      },
      {
        id: "2",
        label: "Ciclo Pascal",
        value: "2",
        ...radioButtonStyle,
      },
      {
        id: "3",
        label: "Tempo Comum (atual)",
        value: "2",
        ...radioButtonStyle,
      },
      {
        id: "4",
        label: "Solenidade",
        value: "4",
        ...radioButtonStyle,
      },
    ],
    []
  );

  return (
    <>
      <Container>
        <Background>
          <Content>
            <Title>SELECIONE O CICLO</Title>
            <Subtitle>TEMPO LITÚRGICO</Subtitle>

            <RadioButtons
              radioButtons={radioButtons}
              onPress={setSelectedId}
              selectedId={selectedId}
            />
          </Content>

          <NavigationFooter
            onPrevious={() => navigation.goBack()}
            onNext={() => navigation.navigate("SelectCelebration")}
          />
        </Background>
      </Container>
    </>
  );
}
