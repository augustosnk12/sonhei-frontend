import React from "react";
import { View } from "react-native";
import Header from "../../components/Header";
import { Text } from "../../components/Text/styles";
import { Col, Row } from "../../styles";
import Colors from "../../utils/Colors";
import { HorizontalLine, MContainer } from "../Home/styles";
import { PictureWrapper, DreamCardWrapper } from "./styles";

// import { Container } from './styles';

const DreamScreen: React.FC = () => {
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
    </MContainer>
  );
};

export default DreamScreen;
