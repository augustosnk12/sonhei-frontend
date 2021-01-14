import React from "react";

import { Container, MiddleContentWrapper } from "./styles";
import { Text } from "../../components/Text/styles";
import { Button } from "../../components/Button/styles";
const Home: React.FC = () => {
  return (
    <Container>
      <Text size="24" center>
        Aqui vai uma logo
      </Text>

      <MiddleContentWrapper>
        <Text size="40" weight='800' center>Meu sonho é...</Text>
        <Text size="18" center>
          O que te impede de realizar seu sonho? Talvez aqui você consiga uma
          ajudinha 😉
        </Text>
      </MiddleContentWrapper>

      <Button>
        <Text size="18">Vamos lá!</Text>
      </Button>
    </Container>
  );
};

export default Home;
