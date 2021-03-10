import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import Header from "../../components/Header";
import { Text } from "../../components/Text/styles";
import { Col, Row } from "../../styles";
import Colors from "../../utils/Colors";
import { HorizontalLine, MContainer } from "../Home/styles";
import { PictureWrapper, DreamCardWrapper } from "./styles";
import { FloatingButton } from "../../components/Button/styles";

// import { Container } from './styles';

const DreamScreen: React.FC = () => {
   const navigation = useNavigation();

  return (
    <MContainer>
      <Header />
      {[1, 2, 3].map((a, i) => {
        return (
          <DreamCardWrapper key={i}>
            <PictureWrapper />

            <Col style={{ flex: 1 }}>
              <Row>
                <Text color={Colors.blackSoft} size={16} weight="700">
                  Beijar um porco
                </Text>
              </Row>
              <Row>
                <Text
                  color={Colors.gray}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{ flex: 1 }}
                >
                  Então, eu meio que sempre quis beijar um porco. Sempre foi um
                  sonho meu e talz...
                </Text>
              </Row>
            </Col>
          </DreamCardWrapper>
        );
      })}

      <FloatingButton onPress={() => navigation.navigate('new-dream')}>
        <AntDesign
          name="plus"
          size={40}
          color={Colors.purpleSoft}
        />
      </FloatingButton>
      
    </MContainer>
  );
};

export default DreamScreen;
