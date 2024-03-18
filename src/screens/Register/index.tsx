import React, { useEffect, useRef, useState } from "react";
import { TextInput } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Input from "../../components/Input";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";
import { LinkButton } from "../../components/Buttons/LinkButton";

import { FormData } from "./types";
import {
  Scroll,
  Container,
  Title,
  Subtitle,
  Form,
  InputWrapper,
  ButtonWrapper,
  LinkButtonWrapper,
} from "./styles";

export function Register() {
  const [isRegistering, setIsRegistering] = useState(false);

  const emailInputRef = useRef<TextInput>();
  const passwordInputRef = useRef<TextInput>();
  const confirmPasswordInputRef = useRef<TextInput>();
  const parishCodeInputRef = useRef<TextInput>();

  const schema = yup.object().shape({
    fullName: yup.string().trim().required("Nome completo obrigatório."),
    email: yup
      .string()
      .trim()
      .required("E-mail obrigatório.")
      .email("E-mail inválido."),
    password: yup.string().trim().required("Senha obrigatória."),
    confirmPassword: yup
      .string()
      .trim()
      .required("Digite a sua senha novamente.")
      .oneOf([yup.ref("password"), null], "As senhas não coincidem."),
    parishCode: yup.string().trim().required("Código da paróquia obrigatório."),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleRegister(formData: FormData) {
    setIsRegistering(true);

    setTimeout(() => {
      setIsRegistering(false);
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
    <Scroll
      contentContainerStyle={{
        minHeight: "100%",
      }}
    >
      <Container>
        <Title>HINÁRIO</Title>
        <Subtitle>CADASTRO</Subtitle>

        <Form>
          <InputWrapper>
            <Controller
              name="fullName"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <Input
                    autoCapitalize="words"
                    autoCorrect={false}
                    editable={!isRegistering}
                    error={errors?.fullName?.message}
                    onChangeText={onChange}
                    onSubmitEditing={() => emailInputRef.current.focus()}
                    placeholder="Nome Completo"
                    value={value}
                  />
                </>
              )}
            />
          </InputWrapper>

          <InputWrapper>
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <Input
                    autoCapitalize="none"
                    autoCorrect={false}
                    editable={!isRegistering}
                    error={errors?.email?.message}
                    keyboardType="email-address"
                    onChangeText={onChange}
                    onSubmitEditing={() => passwordInputRef.current.focus()}
                    placeholder="E-mail"
                    ref={emailInputRef}
                    value={value}
                  />
                </>
              )}
            />
          </InputWrapper>

          <InputWrapper>
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <Input
                    autoCapitalize="none"
                    autoCorrect={false}
                    editable={!isRegistering}
                    error={errors?.password?.message}
                    onChangeText={onChange}
                    onSubmitEditing={() =>
                      confirmPasswordInputRef.current.focus()
                    }
                    placeholder="Senha"
                    ref={passwordInputRef}
                    secureTextEntry
                    value={value}
                  />
                </>
              )}
            />
          </InputWrapper>

          <InputWrapper>
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <Input
                    autoCapitalize="none"
                    autoCorrect={false}
                    editable={!isRegistering}
                    error={errors?.confirmPassword?.message}
                    onChangeText={onChange}
                    onSubmitEditing={() => parishCodeInputRef.current.focus()}
                    placeholder="Confirmar Senha"
                    ref={confirmPasswordInputRef}
                    secureTextEntry
                    value={value}
                  />
                </>
              )}
            />
          </InputWrapper>

          <InputWrapper>
            <Controller
              name="parishCode"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <Input
                    autoCapitalize="none"
                    autoCorrect={false}
                    editable={!isRegistering}
                    error={errors?.parishCode?.message}
                    onChangeText={onChange}
                    onSubmitEditing={handleSubmit(handleRegister)}
                    placeholder="Código da Paróquia"
                    ref={parishCodeInputRef}
                    value={value}
                  />
                </>
              )}
            />
          </InputWrapper>

          <ButtonWrapper>
            <PrimaryButton
              disabled={isRegistering}
              inactive={isRegistering}
              onPress={handleSubmit(handleRegister)}
              title="ENTRAR"
            />
          </ButtonWrapper>
        </Form>

        <LinkButtonWrapper>
          <LinkButton disabled={isRegistering} title="JÁ TENHO UMA CONTA" />
        </LinkButtonWrapper>
      </Container>
    </Scroll>
  );
}
