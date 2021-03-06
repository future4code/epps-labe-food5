import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import { TextField, Button, ThemeProvider } from "@material-ui/core";
import useForm from "../../Hooks/useForm";
import { addresUserCard } from "../../services/PutAddres";

import { theme } from "../../constants/themes";
import styled from "styled-components";

const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  form {
    display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 450px;
  }

  Button {
    margin-top: 16px;
  }
`;

const Title = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  letter-spacing: -0.39px;
  text-align: center;
  margin-top: 7vw;
`;

function AddAddressPage() {
  const history = useHistory();

  const [form, handleInput] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const createAddres = (event) => {
    event.preventDefault();

    const element = document.getElementById("addres_form");
    const isValid = element.checkValidity();
    element.reportValidity();

    if (isValid) {
      //requisição api,o body é a resposta do formulario
      addresUserCard(form, history);
    }
    console.log(form, "form do adrres aqui");
  };

  useEffect(() => {
    if(localStorage.getItem("token") === null) {
      history.push("/")
    }
  }, [])  

  return (
    <ThemeProvider theme={theme}>
      <AddressContainer>
        <Title>Meu Endereço</Title>
        <form id={"addres_form"}>
          <TextField
            value={form.street}
            name={"street"}
            onChange={handleInput}
            label="Logradouro"
            placeholder="Rua / Av."
            type={"text"}
            variant={"outlined"}
            margin={"normal"}
            fullWidth
            required
            autoFocus
          />
          <TextField
            value={form.number}
            name={"number"}
            onChange={handleInput}
            label="Número"
            placeholder="Número"
            type={"number"}
            variant={"outlined"}
            margin={"normal"}
            fullWidth
            required
          />

          <TextField
            value={form.neighbourhood}
            name={"neighbourhood"}
            onChange={handleInput}
            label="Bairro"
            placeholder="Bairro"
            type={"text"}
            variant={"outlined"}
            margin={"normal"}
            fullWidth
            required
          />

          <TextField
            value={form.city}
            name={"city"}
            onChange={handleInput}
            label="Cidade"
            placeholder="Cidade"
            type={"text"}
            variant={"outlined"}
            margin={"normal"}
            fullWidth
            required
          />

          <TextField
            value={form.state}
            name={"state"}
            onChange={handleInput}
            label="Estado"
            placeholder="Estado"
            type={"text"}
            variant={"outlined"}
            margin={"normal"}
            fullWidth
            required
          />
          <TextField
            value={form.complement}
            name={"complement"}
            onChange={handleInput}
            label="Complemento"
            placeholder="Apto. / Bloco"
            type={"text"}
            variant={"outlined"}
            margin={"normal"}
            fullWidth
          />

          <Button
            variant={"contained"}
            color={"primary"}
            type={"submit"}
            onClick={createAddres}
          >
            Salvar
          </Button>
        </form>
      </AddressContainer>
    </ThemeProvider>
  );
}

export default AddAddressPage;
