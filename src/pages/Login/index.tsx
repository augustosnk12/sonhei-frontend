import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Text } from "../../components/Text/styles";
import { Button } from "../../components/Button/styles";
import Input from "../../components/Input";
import {
  FieldLabel,
  InputWrapper,
  ForgotPasswordWrapper,
  SignUpWrapper,
  FormWrapper,
  ButtonWrapper,
} from "./styles";
import { Container } from "./../Home/styles";

const Login: React.FC = () => {
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
            <FieldLabel size="16">Login</FieldLabel>
            <Input />
          </InputWrapper>

          <InputWrapper>
            <FieldLabel size="16">Senha</FieldLabel>
            <Input />
          </InputWrapper>

          <ForgotPasswordWrapper>
            <Text right>Esqueceu sua senha?</Text>
          </ForgotPasswordWrapper>

          <ButtonWrapper>
            <Button onPress={() => {}}>
              <Text size="18">Entrar</Text>
            </Button>
          </ButtonWrapper>
        </FormWrapper>

        <SignUpWrapper>
          <Text size="14">Ainda não tem uma conta? Cadastre-se aqui</Text>
        </SignUpWrapper>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default Login;
