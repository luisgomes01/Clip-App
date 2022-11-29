import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { useState } from "react";
import { ToastAndroid, Alert, Platform } from "react-native";
import Checkbox from "../../components/checkbox/Checkbox";
import Container from "../../components/container/Container";
import DatePicker from "../../components/datepicker/DatePicker";
import Input from "../../components/input/Input";
import Title from "../../components/title/Title";
import Button from "../../components/button/Button";
import { RootNavigatorProps } from "../../router";
import { useClip } from "../../contexts/ClipContext";

type Props = {
  navigation: StackNavigationProp<RootNavigatorProps, "CreateBill">;
  route: RouteProp<RootNavigatorProps, "CreateBill">;
};
const CreateBill = ({ route, navigation }: Props) => {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [paid, setPaid] = useState(false);

  const { addBill, bills } = useClip();

  const handleAddBill = () => {
    if (!description) {
      if (Platform.OS === "android") {
        ToastAndroid.showWithGravity(
          "Por favor, preencha todos os campos!",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
        return false;
      }

      Alert.alert("Por favor, preencha todos os campos!");

      return false;
    }

    addBill({
      id: String(bills.length + description),
      description,
      date,
      paid,
      groupId: route.params.groupId,
    });

    setDescription("");
    setPaid(false);
    setDate(new Date());
    return true;
  };
  return (
    <Container>
      <Title>Adicionar Conta</Title>
      <Input
        label="Descrição"
        containerStyle={{ marginTop: 12 }}
        placeholder="Descrição da Conta"
        value={description}
        onChangeText={setDescription}
      />
      <DatePicker
        containerStyle={{ marginTop: 12 }}
        label="Data da Conta"
        value={date}
        onChange={setDate}
      />
      <Checkbox
        label="Pago"
        checked={paid}
        containerStyle={{ marginTop: 12 }}
        onChange={setPaid}
      />
      <Button
        type="primary"
        style={{ marginTop: "auto" }}
        onPress={handleAddBill}
      >
        Salvar
      </Button>
      <Button type="secondary" onPress={() => navigation.pop()}>
        Voltar
      </Button>
    </Container>
  );
};

export default CreateBill;
