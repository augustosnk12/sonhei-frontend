import React from "react";
import { View } from "react-native";

import { Container, InputWrapper } from "./styles";
import { InputProps } from "./interfaces";

const Input: React.FC<InputProps> = ({
  multiline,
  numberOfLines,
}) => {
  return <InputWrapper multiline={multiline} numberOfLines={numberOfLines} />;
};

export default Input;
