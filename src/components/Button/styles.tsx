import styled from "styled-components/native";

import Colors from "../../utils/Colors";

interface ButtonProps {
  disabled?: boolean;
}

export const Button = styled.TouchableOpacity`
  background-color: ${({ disabled }) =>
    disabled ? Colors.purpleSoft : Colors.redSoft};
    padding: 15px 5px;
    margin-bottom: 20px;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
`;

export const FloatingButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 20px;

  background-color: ${Colors.redSoft};
  border-radius: 25px;
  padding: 5px;
`
