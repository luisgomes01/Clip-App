import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View } from "react-native";
import { useTheme } from "styled-components";
import Button from "./components/button/Button";
import Checkbox from "./components/checkbox/Checkbox";
import DatePicker from "./components/datepicker/DatePicker";
import Input from "./components/input/Input";
import PickerSelect from "./components/picker/Picker";
import RoundedButton from "./components/roundedButton/RoundedButton";
import Title from "./components/title/Title";

export const Application = () => {
  const theme = useTheme();
  const [date, setDate] = useState(new Date());

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.background,
      }}
    >
      <StatusBar backgroundColor={theme.primary} style={theme.name} />
      <View
        style={{
          marginTop: 50,
          paddingLeft: 16,
          paddingRight: 16,
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
        <RoundedButton type="primary" />
        <DatePicker
          label="Data da conta"
          value={date}
          onChange={() => console.log("Changing datepicker value")}
          type="set"
          nativeEvent={{
            timestamp: 0,
          }}
        />
      </View>
    </View>
  );
};

export default Application;
