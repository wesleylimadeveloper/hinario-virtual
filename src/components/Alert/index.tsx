import React from "react";
import { Modal } from "react-native";
import { useTheme } from "styled-components/native";

import { PrimaryButton } from "../Buttons/PrimaryButton";

import { AlertProps } from "./types";
import {
  Container,
  AlertBox,
  Text,
  Title,
  Buttons,
  ButtonWrapper,
} from "./styles";

export function Alert({
  title,
  message,
  cancelButtonText,
  confirmButtonText,
  onCancel,
  onConfirm,
}: AlertProps) {
  const THEME = useTheme();

  return (
    <Modal animationType="fade" visible transparent>
      <Container>
        <AlertBox>
          <Title>{title?.toUpperCase()}</Title>

          <Text>{message}</Text>

          <Buttons>
            {cancelButtonText && (
              <ButtonWrapper>
                <PrimaryButton title={cancelButtonText} onPress={onCancel} />
              </ButtonWrapper>
            )}
            {confirmButtonText && (
              <ButtonWrapper>
                <PrimaryButton
                  title={confirmButtonText}
                  color={THEME.colors.light}
                  textColor={THEME.colors.primary}
                  onPress={onConfirm}
                />
              </ButtonWrapper>
            )}
          </Buttons>
        </AlertBox>
      </Container>
    </Modal>
  );
}
