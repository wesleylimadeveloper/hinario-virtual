import React, { forwardRef } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { PrimaryButton } from "../Buttons/PrimaryButton";
import { RFValue } from "react-native-responsive-fontsize";

import { PartBottomSheetProps } from "./types";
import {
  Container,
  Header,
  Content,
  CelebrationInfo,
  Text,
  Title,
  ButtonWrapper,
} from "./styles";

export const PartBottomSheet = forwardRef<BottomSheet, PartBottomSheetProps>(
  ({ onClose }, ref) => {
    const THEME = useTheme();

    return (
      <BottomSheet
        backgroundStyle={{
          backgroundColor: THEME.colors.primary_light,
        }}
        handleIndicatorStyle={{
          backgroundColor: THEME.colors.light,
        }}
        index={0}
        ref={ref}
        snapPoints={[0.1, "80%"]}
      >
        <Container>
          <Header>
            <FontAwesome
              onPress={onClose}
              color={THEME.colors.light}
              name="close"
              size={RFValue(24)}
            />
          </Header>

          <BottomSheetScrollView
            contentContainerStyle={{
              paddingHorizontal: 16,
            }}
          >
            <Content>
              <CelebrationInfo>
                <Text>Ano: A</Text>
                <Text>Ciclo: Ciclo do Natal</Text>
                <Text>Celebração: 1º Dom Advento</Text>
              </CelebrationInfo>

              <Title>ESTRUTURA</Title>
              <Text>MÓDULOS DA CELEBRAÇÃO</Text>

              <ButtonWrapper>
                <PrimaryButton
                  title="Salvar Repertório"
                  color={THEME.colors.light}
                  textColor={THEME.colors.primary}
                />
              </ButtonWrapper>
            </Content>
          </BottomSheetScrollView>
        </Container>
      </BottomSheet>
    );
  }
);
