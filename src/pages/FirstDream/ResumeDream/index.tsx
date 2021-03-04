import React from "react";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Button } from "../../../components/Button/styles";
import Input from "../../../components/Input";
import { Text } from "../../../components/Text/styles";
import Colors from "../../../utils/Colors";
import { LabelWrapper, WelcomeWrapper } from "../styles";
import { MContainer } from "../../Home/styles";
import CommomModal from "../../../components/Modal";
import { Alert } from "react-native";

// import { Container } from './styles';

const ResumeDream: React.FC = () => {
  const navigation = useNavigation();

  const [openModal, setOpenModal] = React.useState(false);

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
            Show de bola!
          </Text>
          <Text size="18" left color={Colors.blackSoft}>
            Agora tente resumir seu sonho em uma frase bem curta
          </Text>
        </WelcomeWrapper>

        <LabelWrapper>
          <Input />
        </LabelWrapper>

        <Button
          onPress={() => {
            setOpenModal(true);
          }}
          style={{ marginTop: 15 }}
        >
          <Text size="18">Próximo</Text>
        </Button>
      </KeyboardAwareScrollView>
      <CommomModal
        open={openModal}
        setOpen={setOpenModal}
        message="Tudo Pronto! Agora você é livre para fazer o que quiser!!! 😎"
        confirmButtonText="Massa!"
        confirmButtonClick={() => navigation.navigate('main')}
      />
    </MContainer>
  );
};

export default ResumeDream;
