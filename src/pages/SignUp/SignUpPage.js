import React from "react";
import useForm from "../../hooks/useForm";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../Constants/url";
import { goToAdressPage } from "../../routes/Coordinator";

import {
  MainContainer,
  Header,
  IconBox,
  MainBox,
  LogoBox,
  BoxFormTitle,
  FormTitle,
  Form,
  BoxButton,
  Button,
} from "./styled";

import backArrow from "../img/icons/back.png";
import invertLogo from "../img/logo.png";

import { InputAdornment, TextField } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const SignUpPage = () => {
  const [form, onChange] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
    confirm_password: "",
  });
  const history = useHistory();

  const signUp = (event) => {
    event.preventDefault();

    const body = {
      name: form.name,
      email: form.email,
      cpf: form.cpf,
      password: form.password,
      confirm_password: form.confirm_password,
    };

    if (form.password !== form.confirm_password) {
      alert("Suas senhas não combinam!");
    } else {
      axios
        .post(`${baseUrl}/signup`, body)
        .then((response) => {
          console.log("Meu usuario: ", response.data.user);
          alert("Deu certo");
          // goToAdressPage(history)
        })
        .catch((err) => {
          console.log("Meu Error: ", err);
          alert("Email ou CPF já cadastrado");
        });
    }
  };

  return (
    <form onSubmit={signUp}>
      <MainContainer>
        <Header>
          <IconBox src={backArrow} alt="icone de voltar para página anterior" />
        </Header>
        <MainBox>
          <LogoBox src={invertLogo} alt="logo 4Food" />
        </MainBox>
        <BoxFormTitle>
          <FormTitle>Cadastrar</FormTitle>
        </BoxFormTitle>
        <Form>
          <TextField
            variant="outlined"
            value={form.name}
            type="text"
            onChange={onChange}
            name={"name"}
            required="true"
            label="Nome"
            placeholder="Nome e Sobrenome"
            style={{ width: "328px" }}
          />
          <TextField
            variant="outlined"
            value={form.email}
            type="email"
            onChange={onChange}
            name={"email"}
            required="true"
            label="E-mail"
            placeholder="email@email.com"
            style={{ width: "328px" }}
          />

          <TextField
            variant="outlined"
            value={form.cpf}
            onChange={onChange}
            name={"cpf"}
            type="text"
            required="true"
            label="CPF"
            placeholder="000.000.000-00"
            style={{ width: "328px" }}
          />

          <TextField
            variant="outlined"
            value={form.password}
            name={"password"}
            onChange={onChange}
            type="password"
            required="true"
            label="Senha"
            placeholder="Mínimo 6 caracteres"
            style={{ width: "328px" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Visibility style={{ color: "#b8b8b8" }} />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            variant="outlined"
            value={form.confirm_password}
            onChange={onChange}
            name={"confirm_password"}
            type="password"
            required="true"
            label="Confirmar"
            placeholder="Confirme a senha anterior"
            style={{ width: "328px" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <VisibilityOff style={{ color: "#b8b8b8" }} />
                </InputAdornment>
              ),
            }}
          />
          <BoxButton>
            <Button>Criar</Button>
          </BoxButton>
        </Form>
      </MainContainer>
    </form>
  );
};

export default SignUpPage;
