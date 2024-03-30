import React, { useEffect, useRef, useState } from "react";
import { TextInput } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Toast } from "react-native-toast-notifications";

import Input from "@/components/Input";
import { LinkButton } from "@/components/Buttons/LinkButton";
import { PrimaryButton } from "@/components/Buttons/PrimaryButton";

import { useAuth } from "@/hooks/useAuth";

import { FormData, LoginNavigationProps } from "./types";
import {
  Container,
  Title,
  Subtitle,
  Form,
  InputWrapper,
  LinkButtonWrapper,
  Footer,
  Text,
} from "./styles";

export function Login() {
  const [isLogginIn, setIsLoggingIn] = useState(false);

  const passwordInputRef = useRef<TextInput>();

  const navigation = useNavigation<LoginNavigationProps>();

  const { login } = useAuth();

  const schema = yup.object().shape({
    email: yup
      .string()
      .trim()
      .required("E-mail obrigatório.")
      .email("E-mail inválido."),
    password: yup.string().trim().required("Senha obrigatória."),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleLogin(formData: FormData) {
    setIsLoggingIn(true);

    try {
      await login(formData);
    } catch (error) {
      if (
        error?.response?.data?.message ===
        "Incorrect email/password combination"
      ) {
        Toast.show("Senha ou e-mail incorretos!", { type: "danger" });
      } else {
        Toast.show(
          "Houve um erro ao realizar o login. Por favor, verifique sua conexão, ou tente novamente mais tarde.",
          { duration: 5000, type: "danger" }
        );
      }

      setIsLoggingIn(false);
    }
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
      <Title>HINÁRIO</Title>
      <Subtitle>LOGIN</Subtitle>

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
                  editable={!isLogginIn}
                  error={errors?.email?.message}
                  onChangeText={onChange}
                  onSubmitEditing={() => passwordInputRef.current.focus()}
                  placeholder="E-mail"
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
                  editable={!isLogginIn}
                  error={errors?.password?.message}
                  onChangeText={onChange}
                  onSubmitEditing={handleSubmit(handleLogin)}
                  placeholder="Senha"
                  secureTextEntry
                  ref={passwordInputRef}
                  value={value}
                />
              </>
            )}
          />
        </InputWrapper>

        <LinkButtonWrapper>
          <LinkButton
            disabled={isLogginIn}
            onPress={() => navigation.navigate("ForgotPassword")}
            title="Esqueci minha senha"
          />
        </LinkButtonWrapper>

        <PrimaryButton
          disabled={isLogginIn}
          inactive={isLogginIn}
          onPress={handleSubmit(handleLogin)}
          title="ENTRAR"
        />
      </Form>

      <Footer>
        <Text>ou</Text>
        <LinkButton
          disabled={isLogginIn}
          onPress={() => navigation.navigate("Register")}
          title="CADASTRE-SE AQUI"
        />
      </Footer>
    </Container>
  );
}
