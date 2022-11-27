import { StyleProp, ViewStyle } from "react-native";
import { useTheme } from "styled-components";
import {
  PickerWrapper,
  PickerContainer,
  PickerItem,
  Label,
  Container,
} from "./Picker.styles";

interface Item {
  label: string;
  value: string | number;
}
interface Props {
  items?: Item[];
  onChange?: (itemValue: string | number, itemIndex: number) => void;
  value?: any;
  containerStyle?: StyleProp<ViewStyle>;
  label?: string;
}
const PickerSelect = ({
  onChange,
  items = [],
  value,
  containerStyle,
  label,
}: Props) => {
  const theme = useTheme();
  return (
    <Container style={containerStyle}>
      {label && <Label>{label}</Label>}
      <PickerWrapper>
        <PickerContainer
          dropdownIconColor={theme.labelColor}
          onValueChange={onChange}
          selectedValue={value}
        >
          <PickerItem label="" value="" />
          {items.map((item, index) => (
            <PickerItem
              key={String(index + item.label)}
              label={item.label}
              value={item.value}
            />
          ))}
        </PickerContainer>
      </PickerWrapper>
    </Container>
  );
};

export default PickerSelect;
