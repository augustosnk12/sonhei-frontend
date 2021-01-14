import styled from "styled-components/native";
import { TextProps as NativeTextProps } from "react-native";

import Colors from "../../utils/Colors";

interface TextProps extends NativeTextProps {
  weight?: 700 | 400 | string | number;
  color?: string;
  center?: boolean;
  right?: boolean;
  bold?: boolean;
  size?: number | string;
}

export const Text = styled.Text<TextProps>`
  /* ${({ weight = 400, bold }) => `font-weight: ${bold ? 700 : weight};`} */
  ${({ weight = "Nunito_600SemiBold" }) =>
    `font-family:${
      weight == "700"
        ? "Nunito_700Bold"
        : weight == "800"
        ? "Nunito_800ExtraBold"
        : weight
    }`}
  color: ${({ color = Colors.white }) => color};
  ${({ center }) => (center ? "text-align: center;" : "")}
  ${({ right }) => (right ? "text-align: right;" : "")}
  ${({ size }) => (size ? `font-size: ${size}px;` : "")}
`;

