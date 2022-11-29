import styled from "styled-components/native";

export const BillContainer = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.listItemBackgroundColor};
  padding-vertical: 12px;
  padding-horizontal: 16px;
  font-size: 16px;
  line-height: 19.5px;
  border-radius: 8px;
  margin-bottom: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BillTitle = styled.Text`
  font-size: 20px;
  line-height: 24.38px;
  font-family: montserrat-medium;
  color: ${(props) =>
    props.theme.name === "light"
      ? props.theme.placeholder
      : props.theme.borderColor};
`;

export const BillDate = styled.Text`
  font-size: 12px;
  color: ${(props) =>
    props.theme.name === "light"
      ? props.theme.placeholder
      : props.theme.borderColor};
  font-family: montserrat-medium;
`;
