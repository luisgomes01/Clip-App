import { useTheme } from "styled-components";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList } from "react-native";
import Input from "../../components/input/Input";
import { SearchContainer, Icon, GroupView, GroupText } from "./styles";
import Container from "../../components/container/Container";
import RoundedButton from "../../components/roundedButton/RoundedButton";
import { useClip } from "../../contexts/ClipContext";
import LampIcon from "../../components/icons/LampIcon";
import WaterDropIcon from "../../components/icons/WaterDropIcon";
import InternetIcon from "../../components/icons/InternetIcon";
import PhoneIcon from "../../components/icons/PhoneIcon";
import BarCodeIcon from "../../components/icons/BarCodeIcon";

type RootStackParamList = {
  CreateGroup: {};
};

type Props = NativeStackScreenProps<RootStackParamList>;

const Search = ({ navigation }: Props) => {
  const theme = useTheme();

  const { groups } = useClip();

  const ICONS_MAPPING = {
    electricity: (
      <LampIcon
        color={theme.name === "light" ? theme.placeholder : theme.labelColor}
      />
    ),
    water: (
      <WaterDropIcon
        color={theme.name === "light" ? theme.placeholder : theme.labelColor}
      />
    ),
    internet: (
      <InternetIcon
        color={theme.name === "light" ? theme.placeholder : theme.labelColor}
      />
    ),
    phone: (
      <PhoneIcon
        color={theme.name === "light" ? theme.placeholder : theme.labelColor}
      />
    ),
    others: (
      <BarCodeIcon
        color={theme.name === "light" ? theme.placeholder : theme.labelColor}
      />
    ),
  };

  const handleAddButton = () => {
    navigation.navigate("CreateGroup");
  };

  return (
    <Container>
      <SearchContainer>
        <Input placeholder="Pesquisar" />
        <Icon color={theme.placeholder} />
      </SearchContainer>
      <FlatList
        data={groups}
        renderItem={({ item }) => (
          <GroupView>
            <GroupText>{item.description}</GroupText>
            {ICONS_MAPPING[item.type]}
          </GroupView>
        )}
      />
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
