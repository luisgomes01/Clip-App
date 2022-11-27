import { StyleProp, ViewStyle } from "react-native";
import { Checkbox, Container, Label } from "./Checkbox.styles";

interface Props {
  checked: boolean;
  label?: string;
  onChange?: ((value: boolean) => void) | undefined;
  containerStyle?: StyleProp<ViewStyle>;
}

const CheckboxComponent = ({
  checked,
  label,
  onChange = () => {},
  containerStyle,
}: Props) => (
  <Container onPress={() => onChange(!checked)} style={containerStyle}>
    <Checkbox checked={checked} />
    {label && <Label>{label}</Label>}
  </Container>
);

export default CheckboxComponent;
