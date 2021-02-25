import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

import { Text } from "../../components/Text/styles";
import Colors from "../../utils/Colors";
import { MContainer } from "../Home/styles";
import Input from "../../components/Input";
import { Button } from "../../components/Button/styles";

import { WelcomeWrapper, LabelWrapper } from "./styles";

const FirstDream: React.FC = () => {
  const navigation = useNavigation()
  
  return (
    <MContainer>
      <Text size="24" center color={Colors.blackSoft}>
        Aqui vai uma logo
      </Text>

      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <WelcomeWrapper>
          <Text size="40" weight="800" left color={Colors.blackSoft}>
            Bartolomeu
          </Text>
          <Text size="18" left color={Colors.blackSoft}>
            Sabemos que todo mundo tem um sonho. A questão é: qual o SEU sonho?!
            Nos diga o que você sempre quis fazer 🤔
          </Text>
        </WelcomeWrapper>

        <LabelWrapper>
          <Input multiline numberOfLines={5}/>
        </LabelWrapper>

        <Button onPress={() => navigation.navigate('resume-dream')} style={{ marginTop: 15 }}>
          <Text size="18">Próximo</Text>
        </Button>
      </KeyboardAwareScrollView>
    </MContainer>
  );
};

export default FirstDream;
