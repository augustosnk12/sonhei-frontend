import styled from 'styled-components/native';
import Colors from '../../utils/Colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.purple};  
  padding: 20px 10px 5px;
`; 

export const MContainer = styled.View`
  flex: 1;
  background-color: ${Colors.purpleSoft};
  padding: 20px 10px 5px;
`

export const MiddleContentWrapper = styled.View`
  flex: 1;
  justify-content: center;
`
export const HorizontalLine = styled.View`
  height: 1px;
  background-color: ${Colors.softGray};
  width: 100%;
`
