import styled from 'styled-components/native';
import Colors from '../../../utils/Colors';

export const Container = styled.View`
  padding: 15px 5px;
  background-color: ${Colors.purpleSoft};
  border-bottom-width: 1px;
  border-color: #dde3f0;
  padding-top: 20px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
