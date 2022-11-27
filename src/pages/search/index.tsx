import { useTheme } from "styled-components";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Input from "../../components/input/Input";
import { SearchContainer, Icon } from "./styles";
import Container from "../../components/container/Container";
import RoundedButton from "../../components/roundedButton/RoundedButton";

type RootStackParamList = {
  CreateGroup: {};
};

type Props = NativeStackScreenProps<RootStackParamList>;

const Search = ({ navigation }: Props) => {
  const theme = useTheme();

  const handleAddButton = () => {
    navigation.navigate("CreateGroup");
  };
  return (
    <Container>
      <SearchContainer>
        <Input placeholder="Pesquisar" />
        <Icon color={theme.labelColor} />
      </SearchContainer>
      <RoundedButton
        type="primary"
        style={{
          position: "absolute",
          right: 16,
          bottom: 32,
        }}
        onPress={handleAddButton}
      />
    </Container>
  );
};

export default Search;
