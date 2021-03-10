import React from "react";
import { View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Text } from "../../Text/styles";

import { Container } from "./styles";
import Colors from "../../../utils/Colors";

interface CustomHeaderProps {
  title?: string;
  check?(): any;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title, check }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={30} color={Colors.blackSoft} />
      </BorderlessButton>

      <Text weight={700} size='20' color={Colors.blackSoft}>{title}</Text>

      <BorderlessButton onPress={check}>
        <Feather name="check" size={30} color={Colors.blackSoft} />
      </BorderlessButton>
    </Container>
  );
};

export default CustomHeader;
