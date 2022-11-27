import { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";
import { Button, Text } from "./Button.styles";

interface Props extends TouchableOpacityProps {
  children: ReactNode;
  type: "primary" | "secondary";
}

const ButtonComponent = ({ children, type, ...otherProps }: Props) => (
  <Button type={type} {...otherProps}>
    <Text type={type}>{children}</Text>
  </Button>
);

export default ButtonComponent;
