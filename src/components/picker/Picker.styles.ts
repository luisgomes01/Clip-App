import styled from "styled-components/native";
import { Picker } from "@react-native-picker/picker";

export const PickerWrapper = styled.View`
  padding-horizontal: 16px;
  font-size: 16px;
  line-height: 19.5px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.labelColor};
`;

export const PickerContainer = styled(Picker)`
  padding-vertical: 12px;
  padding-horizontal: 16px;
  font-size: 16px;
  line-height: 19.5px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.labelColor};
  font-family: montserrat-regular;
`;

export const PickerItem = styled(Picker.Item)`
  font-family: montserrat-regular;
  color: ${(props) => props.theme.labelColor};
`;
