import { useState } from "react";
import { ToastAndroid, Alert, Platform } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import PickerSelect from "../../components/picker/Picker";
import Title from "../../components/title/Title";
import { useClip } from "../../contexts/ClipContext";

import { Container } from "./styles";
import { RootNavigatorProps } from "../../router";

type Props = NativeStackScreenProps<RootNavigatorProps>;

const CreateGroup = ({ navigation }: Props) => {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const { addGroup, groups } = useClip();
  const handleAddNewGroup = () => {
    if (!description || !type) {
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

    addGroup({
      description,
      type,
      id: String(groups.length + type),
    });

    setDescription("");
    setType("");
    ToastAndroid.showWithGravity(
      "Grupo adicionado!",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
    return true;
  };
  return (
    <Container>
      <Title>Criar Grupo</Title>
      <Input
        label="Descrição"
        containerStyle={{ marginTop: 12 }}
        placeholder="Descrição do Grupo"
        value={description}
        onChangeText={setDescription}
      />
      <PickerSelect
        containerStyle={{ marginTop: 12 }}
        label="Tipo"
        items={[
          {
            label: "Energia",
            value: "electricity",
          },
          {
            label: "Água",
            value: "water",
          },
          {
            label: "Internet",
            value: "internet",
          },
          {
            label: "Telefone",
            value: "phone",
          },
          {
            label: "Outros Pagamentos",
            value: "others",
          },
        ]}
        value={type}
        onChange={(value) => setType(String(value))}
      />
      <Button
        type="primary"
        style={{ marginTop: "auto" }}
        onPress={handleAddNewGroup}
      >
        Salvar
      </Button>
      <Button type="secondary" onPress={() => navigation.pop()}>
        Voltar
      </Button>
    </Container>
  );
};

export default CreateGroup;
