import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

interface Props extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  ref?: undefined;
  as?: undefined;
  m?: number | string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
  p?: number | string;
  pt?: number | string;
  pr?: number | string;
  pb?: number | string;
  pl?: number | string;
  flexDirection?: 'column' | 'row';
}

const StyledDiv = styled.div<Props>((props) => ({
  display: 'flex',
  margin: props.m || undefined,
  marginTop: props.mt || undefined,
  marginRight: props.mr || undefined,
  marginBottom: props.mb || undefined,
  marginLeft: props.ml || undefined,
  padding: props.p || undefined,
  paddingTop: props.pt || undefined,
  paddingRight: props.pr || undefined,
  paddingBottom: props.pb || undefined,
  paddingLeft: props.pl || undefined,
  flexDirection: props.flexDirection,
}));

export const Box: React.FC<Props> = ({ children, ...other }) => {
  return <StyledDiv {...other}>{children}</StyledDiv>;
};
