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
