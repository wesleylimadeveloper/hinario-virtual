import React, { useMemo, useState } from "react";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { RadioButtonProps } from "react-native-radio-buttons-group";

import { RadioButtons } from "../../components/RadioButtons";
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
        color: THEME.colors.gray_light,
        label: "1º Domingo",
        value: "1",
      },
      {
        id: "2",
        color: THEME.colors.gray_light,
        label: "2º Domingo",
        value: "2",
      },
      {
        id: "3",
        color: THEME.colors.gray_light,
        label: "3º Domingo",
        value: "3",
      },
      {
        id: "5",
        color: THEME.colors.gray_light,
        label: "5º Domingo",
        value: "5",
      },
      {
        id: "6",
        color: THEME.colors.gray_light,
        label: "6º Domingo",
        value: "6",
      },
      {
        id: "7",
        color: THEME.colors.gray_light,
        label: "7º Domingo",
        value: "7",
      },
      {
        id: "8",
        color: THEME.colors.gray_light,
        label: "8º Domingo",
        value: "8",
      },
      {
        id: "9",
        color: THEME.colors.gray_light,
        label: "9º Domingo",
        value: "9",
      },
      {
        id: "10",
        color: THEME.colors.gray_light,
        label: "10º Domingo",
        value: "10",
      },
      {
        id: "11",
        color: THEME.colors.gray_light,
        label: "11º Domingo",
        value: "11",
      },
    ],
    []
  );

  return (
    <>
      <Container>
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
      </Container>
    </>
  );
}
