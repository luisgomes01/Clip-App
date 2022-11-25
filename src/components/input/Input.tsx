import { StyleProp, TextInputProps, View, ViewStyle } from "react-native";
import { useTheme } from "styled-components";
import { Input, Label } from "./Input.styles";

interface Props extends TextInputProps {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
}
const InputComponent = ({ label, containerStyle, ...otherProps }: Props) => {
  const theme = useTheme();
  return (
    <View style={containerStyle}>
      {label && <Label>{label}</Label>}
      <Input placeholderTextColor={theme.placeholder} {...otherProps} />
    </View>
  );
};

export default InputComponent;
