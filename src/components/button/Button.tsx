import { ReactNode } from "react";
import { Button, Text } from "./Button.styles";

interface Props {
  children: ReactNode;
  type: "primary" | "secondary";
}
const ButtonComponent = ({ children, type }: Props) => (
  <Button type={type}>
    <Text type={type}>{children}</Text>
  </Button>
);

export default ButtonComponent;
