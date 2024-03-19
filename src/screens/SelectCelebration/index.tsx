import React, { useMemo, useState } from "react";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { RadioButtonProps } from "react-native-radio-buttons-group";

import { Background } from "../../components/Background";
import { RadioButtons } from "../../components/RadioButtons";
import { radioButtonStyle } from "../../components/RadioButtons/styles";
import { NavigationFooter } from "../../components/NavigationFooter";

import { SelectCelebrationNavigationProps } from "./types";
import { Container, Content, Title, Subtitle } from "./styles";

export function SelectCelebration() {
  const [selectedId, setSelectedId] = useState<string | undefined>();

  const THEME = useTheme();

  const navigation = useNavigation<SelectCelebrationNavigationProps>();

  const radioButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        id: "1",
        label: "1º Domingo",
        value: "1",
        ...radioButtonStyle,
      },
      {
        id: "2",
        label: "2º Domingo",
        value: "2",
        ...radioButtonStyle,
      },
      {
        id: "3",
        label: "3º Domingo",
        value: "3",
        ...radioButtonStyle,
      },
      {
        id: "5",
        label: "5º Domingo",
        value: "5",
        ...radioButtonStyle,
      },
      {
        id: "6",
        label: "6º Domingo",
        value: "6",
        ...radioButtonStyle,
      },
      {
        id: "7",
        label: "7º Domingo",
        value: "7",
        ...radioButtonStyle,
      },
      {
        id: "8",
        label: "8º Domingo",
        value: "8",
        ...radioButtonStyle,
      },
      {
        id: "9",
        label: "9º Domingo",
        value: "9",
        ...radioButtonStyle,
      },
      {
        id: "10",
        label: "10º Domingo",
        value: "10",
        ...radioButtonStyle,
      },
      {
        id: "11",
        label: "11º Domingo",
        value: "11",
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
            <Title>SELECIONE A CELEBRAÇÃO</Title>
            <Subtitle>ANO LITÚRGICO</Subtitle>

            <RadioButtons
              radioButtons={radioButtons}
              onPress={setSelectedId}
              selectedId={selectedId}
            />
          </Content>

          <NavigationFooter
            onPrevious={() => navigation.goBack()}
            onNext={() => {}}
          />
        </Background>
      </Container>
    </>
  );
}
