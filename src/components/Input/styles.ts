import styled from "styled-components/native";
import { TextInput } from "react-native-gesture-handler";

import Colors from '../../utils/Colors';

export const Container = styled.View``;

export const InputWrapper = styled(TextInput)`
  min-height: 50px;
  background: ${Colors.white};
  color: ${Colors.darkBlack};
  padding: 0 20px;
  font-family: 'Nunito_600SemiBold';
  font-size: 16px;
  border-color: ${Colors.white};
  border-radius: 30px;
  border-width: 1px;
`;
