import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { PrimaryButton } from "../Buttons/PrimaryButton";

import Input from "@/components/Input";

import { useRepertoire } from "@/hooks/useRepertoire";

import { SaveRepertoireModalProps } from "./types";
import { Container, Title, Buttons, ButtonsWrapper } from "./styles";

export function SaveRepertoireModal({
  onClose,
  onSaveRepertoire,
}: SaveRepertoireModalProps) {
  const THEME = useTheme();

  const { isSavingRepertoire, repertoireTitle, setTitle } = useRepertoire();

  return (
    <Container>
      <Title>Salvar Repertório</Title>

      <Input
        autoCapitalize="words"
        autoCorrect={false}
        autoFocus
        error={!repertoireTitle.trim() ? "Título obrigatório" : null}
        editable={!isSavingRepertoire}
        onChangeText={setTitle}
        onSubmitEditing={onSaveRepertoire}
        placeholder="Título"
        value={repertoireTitle}
      />

      <Buttons>
        <ButtonsWrapper>
          <PrimaryButton
            title="Cancelar"
            color={THEME.colors.light}
            textColor={THEME.colors.primary}
            disabled={isSavingRepertoire}
            onPress={onClose}
          />
        </ButtonsWrapper>

        <ButtonsWrapper>
          <PrimaryButton
            title="Salvar"
            onPress={onSaveRepertoire}
            disabled={isSavingRepertoire}
          />
        </ButtonsWrapper>
      </Buttons>

      {isSavingRepertoire && (
        <ActivityIndicator size={"small"} color={THEME.colors.primary} />
      )}
    </Container>
  );
}
