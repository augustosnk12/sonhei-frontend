import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import Header from "../../components/Header";
import { Text } from "../../components/Text/styles";
import { MContainer } from "../Home/styles";
import FeedCard from "./FeedCard";

// import { Container } from './styles';

const Feed: React.FC = () => {
  return (
    <MContainer>
      <Header headerTitle="Aqui vai uma logo" headerSize={20} />
      <ScrollView>
        <FeedCard />
        <FeedCard />
      </ScrollView>
    </MContainer>
  );
};

export default Feed;
