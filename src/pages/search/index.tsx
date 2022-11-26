import { View } from "react-native";
import { useTheme } from "styled-components";
import Button from "../../components/button/Button";
import Checkbox from "../../components/checkbox/Checkbox";
import Input from "../../components/input/Input";
import PickerSelect from "../../components/picker/Picker";
import Title from "../../components/title/Title";

const Search = () => {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: theme.background,
      }}
    >
      <Title>Criar Grupo</Title>
      <Input label="Descrição" placeholder="Descrição do Grupo" />
      <Checkbox
        checked={false}
        label="Pago"
        containerStyle={{ marginTop: 15 }}
      />
      <Button type="primary">Salvar</Button>
      <Button type="secondary">Voltar</Button>
      <PickerSelect
        items={[
          {
            label: "Java",
            value: "java",
          },
          {
            label: "Javascript",
            value: "javascript",
          },
        ]}
      />
    </View>
  );
};

export default Search;
