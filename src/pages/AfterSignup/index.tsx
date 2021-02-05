import React from "react";
import { View } from "react-native";
import { FloatingButton } from "../../components/Button/styles";
import { MaterialIcons } from "@expo/vector-icons";

import { Text } from "../../components/Text/styles";
import Colors from "../../utils/Colors";
import { MContainer } from "../Home/styles";

import { WelcomeWrapper, LabelWrapper } from "./styles";

const AfterSignup: React.FC = () => {
  return (
    <MContainer>
      <Text size="24" center color={Colors.blackSoft}>
        Aqui vai uma logo
      </Text>

      <WelcomeWrapper>
        <Text size="40" weight="800" left color={Colors.blackSoft}>
          Bem vindo,
        </Text>
        <Text size="18" left color={Colors.blackSoft}>
          Bartolomeu
        </Text>
      </WelcomeWrapper>

      <LabelWrapper>
        <Text size="18" right color={Colors.blackSoft}>
          É uma honra ter você conosco
        </Text>
      </LabelWrapper>

      <LabelWrapper>
        <Text size="18" left color={Colors.blackSoft}>
          Sinta-se em casa 😘
        </Text>
      </LabelWrapper>

      <FloatingButton>
        <MaterialIcons
          name="arrow-forward-ios"
          size={40}
          color={Colors.purpleSoft}
        />
      </FloatingButton>
    </MContainer>
  );
};

export default AfterSignup;
