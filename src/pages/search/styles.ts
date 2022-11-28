import styled from "styled-components/native";
import SearchIcon from "../../components/icons/SearchIcon";

export const SearchContainer = styled.View`
  position: relative;
  margin-bottom: 17px;
`;

export const Icon = styled(SearchIcon)`
  position: absolute;
  right: 16px;
  align-self: center;
  top: 18px;
  color: ${(props) => props.theme.placeholder};
`;

export const GroupView = styled.View`
  background-color: ${(props) => props.theme.listItemBackgroundColor};
  padding-vertical: 12px;
  padding-horizontal: 16px;
  font-size: 16px;
  line-height: 19.5px;
  border-radius: 8px;
  border-width: 1px;
  margin-bottom: 12px;
  border-color: ${(props) =>
    props.theme.name === "light"
      ? props.theme.placeholder
      : props.theme.listItemBackgroundColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const GroupText = styled.Text`
  font-size: 20px;
  line-height: 24.38px;
  color: ${(props) =>
    props.theme.name === "light"
      ? props.theme.placeholder
      : props.theme.borderColor};
`;
