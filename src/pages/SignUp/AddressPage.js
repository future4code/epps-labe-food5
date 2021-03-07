import React from "react";
import { Address } from "../../constante/user";
import { useForm } from "../../pages/hooks/useForm";
import { useHistory } from "react-router-dom";
import useProtectedPage from "../../pages/hooks/useProtectedPage";
import {
  StyledAddress,
  TitleAddress,
  InputAddressDiv,
  InputAddress,
  IconBox,
  Header,
  InputButton,
  Title,
} from "./styleAdress";
import backArrow from "../img/icons/back.png";

const AddressPage = () => {
    
  useProtectedPage();

  const history = useHistory();

  const { form, onChange } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  // Função para identificar o que foi digitado e enviado para API
  // const handleSubmit = (event) => {
  //     event.preventDefault()
  //     Address(form, history)
  // }

  return (
    <StyledAddress>
      <Header>
        <IconBox src={backArrow} alt="icone de voltar para página anterior" />
      </Header>

      <TitleAddress>
        <Title>Meu endereço</Title>
      </TitleAddress>

        {/* // onSubmit={} */}
      <form>
        <InputAddressDiv>
          <InputAddress
            placeholder="Rua / Av * "
            name="street"
            value={form.street}
            onChange={onChange}
            required
          />
        </InputAddressDiv>

        <InputAddressDiv>
          <InputAddress
            placeholder="Numero *"
            name="number"
            type="number"
            value={form.number}
            onChange={onChange}
            required
          />
        </InputAddressDiv>

        <InputAddressDiv>
          <InputAddress
            placeholder="Bairro *"
            name="neighbourhood"
            value={form.neighbourhood}
            onChange={onChange}
            required
          />
        </InputAddressDiv>

        <InputAddressDiv>
          <InputAddress
            placeholder="Cidade *"
            name="city"
            value={form.city}
            onChange={onChange}
            required
          />
        </InputAddressDiv>

        <InputAddressDiv>
          <InputAddress
            placeholder="Estado *"
            name="state"
            value={form.state}
            onChange={onChange}
            required
          />
        </InputAddressDiv>

        <InputAddressDiv>
          <InputAddress
            placeholder="Complemento"
            name="complement"
            value={form.complement}
            onChange={onChange}
          />
        </InputAddressDiv>

        <InputButton type="submit">Salvar</InputButton>
      </form>
    </StyledAddress>
  );
};

export default AddressPage;
