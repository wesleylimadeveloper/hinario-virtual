import React, { Fragment, forwardRef, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { RFValue } from "react-native-responsive-fontsize";
import { Toast } from "react-native-toast-notifications";
import Modal from "react-native-modal";

import { PrimaryButton } from "../Buttons/PrimaryButton";
import { SaveRepertoireModal } from "../SaveRepertoireModal";

import { useRepertoire } from "@/hooks/useRepertoire";

import { PartBottomSheetNavigationProps, PartBottomSheetProps } from "./types";
import {
  Container,
  Header,
  Content,
  CelebrationInfo,
  Text,
  Title,
  Parts,
  ButtonWrapper,
} from "./styles";

export const PartBottomSheet = forwardRef<BottomSheet, PartBottomSheetProps>(
  ({ parts, onClose }, ref) => {
    const [isSaveRepertoireModalVisible, setIsSaveRepertoireModalVisible] =
      useState(false);

    const navigation = useNavigation<PartBottomSheetNavigationProps>();

    const THEME = useTheme();

    const {
      isSavingRepertoire,
      partBottomSheetRef,
      repertoire,
      repertoireTitle,
      resetStates,
      saveRepertoire,
    } = useRepertoire();

    function verifyRepertoireData() {
      if (repertoire.length < 1) {
        return Toast.show(
          "Para salvar um repertório, é preciso adicionar músicas a ele.",
          { type: "warning" }
        );
      }

      setIsSaveRepertoireModalVisible(true);
    }

    async function handleSaveRepertoire() {
      if (!repertoireTitle.trim()) return;

      try {
        const response = await saveRepertoire(repertoireTitle);

        if (response.status === 200) {
          partBottomSheetRef.current?.close();
          resetStates();

          Toast.show("Repertório salvo com sucesso!", {
            duration: 5000,
            type: "success",
          });

          return navigation.navigate("Home");
        }

        partBottomSheetRef.current?.close();
      } catch (error) {
        Toast.show(
          "Houve um erro ao salvar o repertório. Por favor, verifique sua conexão, ou tente novamente mais tarde.",
          { duration: 5000, type: "danger" }
        );
      }
    }

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
        snapPoints={[0.1, "95%"]}
      >
        <Container>
          <Header>
            <FontAwesome
              disabled={isSavingRepertoire}
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

              <Parts>
                {parts.map((part) => (
                  <Fragment key={part.part.id}>
                    <Title>{part.part.description}</Title>

                    <Text>
                      {repertoire?.find(
                        (music) => music?.celebrationPartId === part?.id
                      )?.music?.title || "-"}
                    </Text>
                  </Fragment>
                ))}
              </Parts>

              <ButtonWrapper>
                <PrimaryButton
                  title="Salvar Repertório"
                  color={THEME.colors.light}
                  textColor={THEME.colors.primary}
                  onPress={verifyRepertoireData}
                />
              </ButtonWrapper>
            </Content>
          </BottomSheetScrollView>
        </Container>

        <Modal isVisible={isSaveRepertoireModalVisible}>
          <SaveRepertoireModal
            onClose={() => setIsSaveRepertoireModalVisible(false)}
            onSaveRepertoire={handleSaveRepertoire}
          />
        </Modal>
      </BottomSheet>
    );
  }
);
