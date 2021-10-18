import { Container } from "./styles";

export const AddBlock = () => {
  return (
    <Container show={false}>
      <form method="POST">
        <label>Adicionar um bloco</label>
        <input type="text" placeholder="Nome do Bloco" />
        <button type="submit"> Cadastrar </button>
      </form>
    </Container>
  );
};
