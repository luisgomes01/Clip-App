import styled from "styled-components/native";

interface Props {
  type: "primary" | "secondary";
}

export const RoundButton = styled.TouchableOpacity<Props>`
  background-color: ${(props) =>
    props.type === "primary" ? props.theme.primary : props.theme.background};
  align-items: center;
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;

export const PlusIcon = styled.Text`
  font-size: 40px;
  color: ${(props) => props.theme.background};
`;
