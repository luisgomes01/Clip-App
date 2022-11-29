import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { FlatList, View } from "react-native";
import { useTheme } from "styled-components";
import Checkbox from "../../components/checkbox/Checkbox";
import Container from "../../components/container/Container";
import InputComponent from "../../components/input/Input";
import RoundedButton from "../../components/roundedButton/RoundedButton";
import Title from "../../components/title/Title";
import { useClip } from "../../contexts/ClipContext";
import { RootNavigatorProps } from "../../router";
import { Icon, SearchContainer } from "../search/styles";
import { BillContainer, BillDate, BillTitle } from "./styles";

type Props = {
  navigation: StackNavigationProp<RootNavigatorProps, "GroupDetails">;
  route: RouteProp<RootNavigatorProps, "GroupDetails">;
};

const GroupDetails = ({ route, navigation }: Props) => {
  const { groups, bills } = useClip();
  const title = groups.find(({ id }) => id === route.params.id).description;
  const filteredBills = bills.filter(
    ({ groupId }) => groupId === route.params.id
  );
  const theme = useTheme();
  return (
    <Container>
      <Title>{title}</Title>
      {filteredBills.length > 0 && (
        <SearchContainer>
          <InputComponent placeholder="Pesquisar" />
          <Icon color={theme.placeholder} />
        </SearchContainer>
      )}
      <FlatList
        data={filteredBills}
        renderItem={({ item }) => (
          <BillContainer>
            <View>
              <BillTitle>{item.description}</BillTitle>
              <BillDate>{item.date.toLocaleDateString()}</BillDate>
            </View>
            <Checkbox checked={item.paid} />
          </BillContainer>
        )}
      />
      <RoundedButton
        type="primary"
        style={{
          position: "absolute",
          right: 16,
          bottom: 32,
        }}
        onPress={() =>
          navigation.navigate("CreateBill", { groupId: route.params.id })
        }
      />
    </Container>
  );
};

export default GroupDetails;
