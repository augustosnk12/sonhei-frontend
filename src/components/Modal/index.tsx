import React from "react";
import Modal from "react-native-modal";

import Colors from "../../utils/Colors";
import { Text } from "../Text/styles";
import { ModalProps } from "./interfaces";
import { ButtonAction, ModalWrapper } from "./styles";

const CommomModal: React.FC<ModalProps> = ({
  open = false,
  setOpen,
  message,
  confirmButtonText = "Ok",
  confirmButtonClick = () => {}
}) => {

  return (
    <Modal isVisible={open} hideModalContentWhileAnimating={true}>
      <ModalWrapper>
        <Text color={Colors.darkBlack} center size="16">
          {message}
        </Text>
        <ButtonAction onPress={() => {
            setOpen(!open);
            confirmButtonClick();
        }}>
          <Text color={Colors.redSoft}>{confirmButtonText}</Text>
        </ButtonAction>
      </ModalWrapper>
    </Modal>
  );
};

export default CommomModal;
