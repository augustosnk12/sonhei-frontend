import styled from 'styled-components/native';
import Colors from '../../utils/Colors';

export const ModalWrapper = styled.View`
  background-color: ${Colors.iceColor};
  padding: 22px 22px 10px;
  justify-content: center;
  align-items: center;

  border-radius: 15px;
`;

export const ButtonAction = styled.TouchableOpacity`
    padding: 20px 10px;
    color: ${Colors.redSoft}
`
