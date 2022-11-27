import styled from "styled-components/native";
import SearchIcon from "./SearchIcon";

export const SearchContainer = styled.View`
  position: relative;
`;

export const Icon = styled(SearchIcon)`
  position: absolute;
  right: 16px;
  align-self: center;
  top: 18px;
`;
