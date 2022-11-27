import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
`;

interface CheckboxProps {
  checked: boolean;
}

export const Checkbox = styled.View<CheckboxProps>`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border-width: 1px;
  border-color: ${(props) =>
    props.checked ? props.theme.green : props.theme.placeholder};
  background-color: ${(props) =>
    props.checked ? props.theme.green : props.theme.background};
`;

export const Label = styled.Text`
  font-size: 16px;
  line-height: 19.5px;
  margin-left: 8px;
  color: ${(props) => props.theme.labelColor};
  font-family: montserrat-medium;
`;
