import React, { useEffect, useState } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Input from "../../components/Input";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";
import { LinkButton } from "../../components/Buttons/LinkButton";

import { FormData, ForgotPasswordNavigationProps } from "./types";
import {
  Container,
  Title,
  Text,
  Form,
  InputWrapper,
  LinkButtonWrapper,
} from "./styles";

export function ForgotPassword() {
  const [isSending, setIsSending] = useState(false);

  const navigation = useNavigation<ForgotPasswordNavigationProps>();

  const schema = yup.object().shape({
    email: yup
      .string()
      .trim()
      .required("E-mail obrigatório.")
      .email("E-mail inválido."),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleSendEmail(formData: FormData) {
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
    }, 2000);
  }

  useEffect(() => {
    async function changeScreenOrientation() {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT
      );
    }

    changeScreenOrientation();

    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);

  return (
    <Container>
      <Title>Esqueci minha senha</Title>
      <Text>
        Um link será enviado para seu e-mail, onde poderá gerar uma nova senha.
      </Text>

      <Form>
        <InputWrapper>
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <Input
                  autoCapitalize="none"
                  autoCorrect={false}
                  editable={!isSending}
                  error={errors?.email?.message}
                  onChangeText={onChange}
                  onSubmitEditing={handleSubmit(handleSendEmail)}
                  placeholder="E-mail"
                  value={value}
                />
              </>
            )}
          />
        </InputWrapper>

        <PrimaryButton
          disabled={isSending}
          inactive={isSending}
          onPress={handleSubmit(handleSendEmail)}
          title="ENVIAR"
        />

        <LinkButtonWrapper>
          <LinkButton
            disabled={isSending}
            onPress={() => navigation.navigate("Login")}
            title="FAZER LOGIN"
          />
        </LinkButtonWrapper>
      </Form>
    </Container>
  );
}
