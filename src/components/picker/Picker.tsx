import { StyleProp, ViewStyle } from "react-native";
import { useTheme } from "styled-components";
import { PickerWrapper, PickerContainer, PickerItem } from "./Picker.styles";

interface Item {
  label: string;
  value: string | number;
}
interface Props {
  items?: Item[];
  onChange?: (itemValue: string | number, itemIndex: number) => void;
  value?: any;
  containerStyle?: StyleProp<ViewStyle>;
}
const PickerSelect = ({
  onChange,
  items = [],
  value,
  containerStyle,
}: Props) => {
  const theme = useTheme();
  return (
    <PickerWrapper style={containerStyle}>
      <PickerContainer
        dropdownIconColor={theme.labelColor}
        onValueChange={onChange}
        selectedValue={value}
      >
        {items.map((item, index) => (
          <PickerItem
            key={String(index + item.label)}
            label={item.label}
            value={item.value}
          />
        ))}
      </PickerContainer>
    </PickerWrapper>
  );
};

export default PickerSelect;
