import styled from "styled-components/native";

interface Props {
  type: "primary" | "secondary";
}

export const Button = styled.TouchableOpacity<Props>`
  background-color: ${(props) =>
    props.type === "primary" ? props.theme.primary : props.theme.background};
  padding-vertical: 12px;
  align-items: center;
  border-radius: 8px;
`;

export const Text = styled.Text<Props>`
  font-family: montserrat-semibold;
  font-size: 20px;
  color: ${(props) =>
    props.type === "primary" ? props.theme.background : props.theme.titleColor};
`;
