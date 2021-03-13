import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../utils/Colors";
import { Text } from "../Text/styles";
import { HeaderWrapper } from "./styles";
import { HorizontalLine } from "../../pages/Home/styles";

// import { Container } from './styles';
interface HeaderProps {
  headerTitle?: any;
  headerSize?: string | number;
}

const Header: React.FC<HeaderProps> = ({headerTitle = 'Meus sonhos', headerSize = 28}) => {
  return (
    <View>
      <HeaderWrapper>
        <Text color={Colors.blackSoft} size={headerSize}>
          {headerTitle}
        </Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Ionicons
            name="search-outline"
            size={28}
            color={Colors.blackSoft}
            style={{ marginRight: 20 }}
          />
          <Ionicons
            name="chatbubble-outline"
            size={28}
            color={Colors.blackSoft}
          />
        </View>
      </HeaderWrapper>

      <HorizontalLine />
    </View>
  );
};

export default Header;
