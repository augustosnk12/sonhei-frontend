import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

import { Container } from "./../Home/styles";
import { Text } from "../../components/Text/styles";
import {
  FormWrapper,
  InputWrapper,
  FieldLabel,
  ButtonWrapper,
  SignUpWrapper,
} from "./styles";
import Input from "../../components/Input";
import { Button } from "../../components/Button/styles";

const Signup: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Text size="24" center>
        Aqui vai uma logo
      </Text>

      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <FormWrapper>
          <InputWrapper>
            <FieldLabel size="16">Nome</FieldLabel>
            <Input />
          </InputWrapper>

          <InputWrapper>
            <FieldLabel size="16">Email</FieldLabel>
            <Input />
          </InputWrapper>

          <InputWrapper>
            <FieldLabel size="16">Senha</FieldLabel>
            <Input />
          </InputWrapper>

          <ButtonWrapper>
            <Button onPress={() => {}}>
              <Text size="18">Cadastrar</Text>
            </Button>
          </ButtonWrapper>
        </FormWrapper>

        <SignUpWrapper onPress={() => navigation.navigate("login")}>
          <Text size="14">Já tem uma conta? Faça login</Text>
        </SignUpWrapper>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default Signup;
