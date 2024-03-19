import React, { useMemo, useState } from "react";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { RadioButtonProps } from "react-native-radio-buttons-group";

import { RadioButtons } from "../../components/RadioButtons";
import { NavigationFooter } from "../../components/NavigationFooter";

import { Container, Content, Title, Subtitle } from "./styles";

export function SelectCycle() {
  const [selectedId, setSelectedId] = useState<string | undefined>();

  const THEME = useTheme();

  const navigation = useNavigation();

  const radioButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        id: "1",
        color: THEME.colors.gray_light,
        label: "Ciclo do Natal",
        value: "1",
      },
      {
        id: "2",
        color: THEME.colors.gray_light,
        label: "Ciclo Pascal",
        value: "2",
      },
      {
        id: "3",
        color: THEME.colors.gray_light,
        label: "Tempo Comum (atual)",
        value: "2",
      },
      {
        id: "4",
        color: THEME.colors.gray_light,
        label: "Solenidade",
        value: "4",
      },
    ],
    []
  );

  return (
    <>
      <Container>
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
          onNext={() => {}}
        />
      </Container>
    </>
  );
}
