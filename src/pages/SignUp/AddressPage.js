import React from 'react'
import { Address } from '../../constante/user'
import { useFormAdress}  from '../../pages/hooks/useFormAdress'
import { useHistory } from 'react-router-dom'
import useProtectedPage from '../../pages/hooks/useProtectedPage'
import { StyledAddress, TitleAddress, InputAddressDiv, InputAddress, IconBox, Header, InputButton, Title } from './styleAdress';
import backArrow from "../img/icons/back.png";




const AddressPage = () => {

    useProtectedPage()

    const history = useHistory()
    const { form, onChange } = useFormAdress({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: "" })

    const handleInput = (event) => {
        const { value, name } = event.target
        onChange(value, name)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        Address(form, history)
    }

    
    

    return (
        
        <StyledAddress>

      
      
        <Header>
          <IconBox src={backArrow} alt="icone de voltar para página anterior" />
        </Header>
           

            <TitleAddress>
                <Title>Meu endereço</Title>
            </TitleAddress>

            <form onSubmit={handleSubmit}>

                <InputAddressDiv>
                    <InputAddress
                        placeholder="Rua / Av * "
                        name="street"
                        value={form.street}
                        onChange={handleInput}
                        required
                    />
                </InputAddressDiv>

                <InputAddressDiv>
                    <InputAddress
                        placeholder="Numero *"
                        name="number"
                        type="number"
                        value={form.number}
                        onChange={handleInput}
                        required
                    />

                </InputAddressDiv>

                <InputAddressDiv>
                    <InputAddress
                        placeholder="Bairro *"
                        name="neighbourhood"
                        value={form.neighbourhood}
                        onChange={handleInput}
                        required
                    />

                </InputAddressDiv>

                <InputAddressDiv>
                    <InputAddress
                        placeholder="Cidade *"
                        name="city"
                        value={form.city}
                        onChange={handleInput}
                        required
                    />
                </InputAddressDiv>

                <InputAddressDiv>

                    <InputAddress
                        placeholder="Estado *"
                        name="state"
                        value={form.state}
                        onChange={handleInput}
                        required
                    />

                </InputAddressDiv>

                <InputAddressDiv>
                    <InputAddress
                        placeholder="Complemento"
                        name="complement"
                        value={form.complement}
                        onChange={handleInput}

                    />

                </InputAddressDiv>

                <InputButton type="submit">Salvar</InputButton>
            </form>

        </StyledAddress>
    )
}

export default AddressPage