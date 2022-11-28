import Checkbox from "../../components/checkbox/Checkbox";
import Container from "../../components/container/Container";
import DatePicker from "../../components/datepicker/DatePicker";
import Input from "../../components/input/Input";
import Title from "../../components/title/Title";
import Button from "../../components/button/Button";

const CreateBill = () => (
  <Container>
    <Title>Adicionar Conta</Title>
    <Input
      label="Descrição"
      containerStyle={{ marginTop: 12 }}
      placeholder="Descrição da Conta"
    />
    <DatePicker
      containerStyle={{ marginTop: 12 }}
      label="Data da Conta"
      value={new Date()}
      onChange={() => {}}
    />
    <Checkbox label="Pago" checked={false} containerStyle={{ marginTop: 12 }} />
    <Button type="primary" style={{ marginTop: "auto" }}>
      Salvar
    </Button>
    <Button type="secondary">Voltar</Button>
  </Container>
);

export default CreateBill;
