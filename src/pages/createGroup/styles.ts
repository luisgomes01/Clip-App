import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.background};
  padding-vertical: 32px;
  padding-horizontal: 16px;
`;
