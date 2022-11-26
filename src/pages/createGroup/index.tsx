import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import PickerSelect from "../../components/picker/Picker";
import Title from "../../components/title/Title";

import { Container } from "./styles";

const CreateGroup = () => (
  <Container>
    <Title>Criar Grupo</Title>
    <Input
      label="Descrição"
      containerStyle={{ marginTop: 12 }}
      placeholder="Descrição do Grupo"
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
    />
    <Button type="primary" style={{ marginTop: "auto" }}>
      Salvar
    </Button>
    <Button type="secondary">Voltar</Button>
  </Container>
);

export default CreateGroup;
