import React from "react";

import {
  Dimensions,
  ViewProps,
  TextProps as NativeTextProps,
} from "react-native";

import styled from "styled-components/native";

interface RowProps extends ViewProps {
  padder?: boolean;
  flex?: boolean | string;
  justifyContent?:
    | "center"
    | "flex-start"
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "flex-end";
  alignItems?:
    | "center"
    | "flex-start"
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "flex-end";
}
export const Row = styled.View<RowProps>`
  flex-direction: row;
  align-items: center;
  ${({ padder }) => (padder ? "padding:10px 20px;" : "")}
  ${({ flex }) => (flex ? "flex: 1;" : "")}
  ${({ justifyContent }) =>
    justifyContent
      ? `justify-content:${justifyContent};`
      : "justify-content:space-between;"};
`;
interface ColProps extends RowProps {
  alignItems?: "center" | "flex-start" | "flex-end";
}
export const Col = styled.View<ColProps>`
  ${({ padder }) => (padder ? "padding:10px 20px;" : "")}
  ${({ flex }) => (flex ? "flex: 1;" : "")}

  ${({ justifyContent }) =>
    justifyContent ? `justify-content:${justifyContent};` : ""}
  ${({ alignItems }) => (alignItems ? `align-items:${alignItems};` : "")}
`;
