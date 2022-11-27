import { Title } from "./Title.styles";

interface Props {
  children: string;
}
const TitleComponent = ({ children }: Props) => <Title>{children}</Title>;

export default TitleComponent;
