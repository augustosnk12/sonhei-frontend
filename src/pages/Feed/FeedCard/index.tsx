import React from "react";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { Text } from "../../../components/Text/styles";
import { Col, Row } from "../../../styles";
import Colors from "../../../utils/Colors";

import {
  Container,
  DreamCardWrapper,
  AvatarPicture,
  ImageFeed,
  BottomIconWrapper,
  IconNumberWrapper,
} from "./styles";
import { HorizontalLine } from "../../Home/styles";

const FeedCard: React.FC = () => {
  return (
    <Container>
      <DreamCardWrapper>
        <AvatarPicture />

        <Col>
          <Text color={Colors.blackSoft} size={16} weight="700">
            Fulano de tal
          </Text>
          <Text color={Colors.gray} size={12} weight="700">
            Espindula
          </Text>
        </Col>
      </DreamCardWrapper>

      <ImageFeed />

      <BottomIconWrapper>
        <Row>
          <Row justifyContent="flex-start">
            <IconNumberWrapper>
              <FontAwesome name="thumbs-o-up" size={28} />
              <Text
                color={Colors.blackSoft}
                size={15}
                style={{ marginLeft: 5 }}
              >
                15
              </Text>
            </IconNumberWrapper>
            <IconNumberWrapper>
              <MaterialCommunityIcons name="comment-text-outline" size={28} />
              <Text
                color={Colors.blackSoft}
                size={15}
                style={{ marginLeft: 5 }}
              >
                69
              </Text>
            </IconNumberWrapper>
          </Row>

          <MaterialCommunityIcons name="dots-horizontal" size={28} />
        </Row>
      </BottomIconWrapper>

      <HorizontalLine style={{ marginTop: 10}} />

    </Container>
  );
};

export default FeedCard;
