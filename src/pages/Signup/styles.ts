import styled from 'styled-components/native';

import { Text } from "../../components/Text/styles";

export const FormWrapper = styled.View`
  flex: 1;
  justify-content: center;
`

export const InputWrapper = styled.View`
  margin-bottom: 10px;
`;

export const FieldLabel = styled(Text)`
  margin: 0 0 5px 20px;
`;

export const ButtonWrapper = styled.View`
  margin-top: 60px;
`;

export const SignUpWrapper = styled.TouchableOpacity`
  align-items: center;
  bottom: 15px;  
`;