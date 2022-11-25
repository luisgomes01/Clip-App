import styled from "styled-components/native";

export const Input = styled.TextInput`
  padding-vertical: 12px;
  padding-horizontal: 16px;
  font-size: 16px;
  line-height: 19.5px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.labelColor};
`;

export const Label = styled.Text`
  font-size: 16px;
  line-height: 19.5px;
  margin-bottom: 4px;
  color: ${(props) => props.theme.labelColor};
`;
