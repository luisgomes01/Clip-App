import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  padding-top: 32px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${(props) => props.theme.background};
  position: relative;
`;

export default Container;
