import { TouchableOpacityProps } from "react-native";
import { RoundButton, PlusIcon } from "./RoundedButton.styles";

interface Props extends TouchableOpacityProps {
  type: "primary" | "secondary";
}

const RoundedButton = ({ type, ...otherProps }: Props) => (
  <RoundButton type={type} {...otherProps}>
    <PlusIcon>+</PlusIcon>
  </RoundButton>
);

export default RoundedButton;
