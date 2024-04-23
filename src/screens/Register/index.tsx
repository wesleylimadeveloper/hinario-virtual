import React, { useRef, useState } from "react";
import { TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Toast } from "react-native-toast-notifications";

import Input from "@/components/Input";
import { PrimaryButton } from "@/components/Buttons/PrimaryButton";
import { LinkButton } from "@/components/Buttons/LinkButton";

import { createUser } from "@/services/users";
import { CreateUserRequest } from "@/services/users/types";

import { FormData, RegisterNavigationProps } from "./types";
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

  const navigation = useNavigation<RegisterNavigationProps>();

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

    const { email, fullName, parishCode, password } = formData;

    const request: CreateUserRequest = {
      email,
      name: fullName,
      parish: parishCode,
      phone: parishCode,
      password,
    };

    try {
      const response = await createUser(request);

      if (response.status === 200) {
        Toast.show("Usuário cadastrado com sucesso!", {
          type: "success",
        });

        return navigation.navigate("Login");
      }

      setIsRegistering(false);
    } catch (error) {
      if (error.response.data.message === "Email address already used.") {
        setIsRegistering(false);

        return Toast.show("Este e-mail já está cadastrado.", {
          type: "warning",
        });
      }

      if (error.response.data.message === "Parish code not exists.") {
        setIsRegistering(false);

        return Toast.show("Código da paróquia inválido.", {
          type: "warning",
        });
      }

      setIsRegistering(false);

      Toast.show(
        "Houve um erro ao realizar o cadastro. Por favor, verifique sua conexão, ou tente novamente mais tarde.",
        { duration: 5000, type: "danger" }
      );
    }
  }

  return (
    <Container>
      <Scroll>
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
                    autoCapitalize="characters"
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
              title="CADASTRAR"
            />
          </ButtonWrapper>
        </Form>

        <LinkButtonWrapper>
          <LinkButton
            disabled={isRegistering}
            onPress={() => navigation.navigate("Login")}
            title="JÁ TENHO UMA CONTA"
          />
        </LinkButtonWrapper>
      </Scroll>
    </Container>
  );
}
