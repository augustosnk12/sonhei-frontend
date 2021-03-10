import React from "react";
import { Alert, View } from "react-native";
import CustomHeader from "../../../components/Header/CustomHeader";
import Input from "../../../components/Input";
import Colors from "../../../utils/Colors";
import { MContainer } from "../../Home/styles";
import { FieldLabel } from "../../Login/styles";

// import { Container } from './styles';

const NewDream: React.FC = () => {
  return (
    <MContainer>
      <CustomHeader title="Um novo sonho..." check={() => {
          Alert.alert('ovo assado')
      }} />
      <FieldLabel color={Colors.blackSoft}> Sonho </FieldLabel>
      <Input />

      <View style={{ marginTop: 20 }}>
        <FieldLabel color={Colors.blackSoft}> Descrição </FieldLabel>
        <Input multiline numberOfLines={5} />
      </View>
    </MContainer>
  );
};

export default NewDream;
