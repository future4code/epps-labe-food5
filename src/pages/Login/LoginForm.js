import React from 'react';
import {InputsContainer, LogoImg, PageText, PageTextContainer } from "./styled";
import { InputWithLabelContainer, InputLabel, InputText, PasswordFormContainer, PasswordIconImg, InputPass } from "../../components/inputs/styled"
import useLogin from '../../hooks/useLogin'
import Logo4Food from '../img/logo.png';
import Visible from '../img/icons/senha-2.png';
import { MainButton } from '../../components/button/mainButtonStyle';

const LoginForm = () => {
  const [form, onChange, Login] = useLogin()

  return (
    <form onSubmit={Login}>  
      <LogoImg src={Logo4Food} alt="4FOOD" />
      <PageTextContainer>
      <PageText>Entrar</PageText>
      </PageTextContainer>
      <InputsContainer>
        <InputWithLabelContainer>
            <InputLabel>E-mail *</InputLabel>
            <InputText 
            name='email'
            value={form.email}
            placeholder= 'email@email.com'
            onChange={onChange}
            label='E-mail'
            type={'email'}
            required
            autoFocus
            />
        </InputWithLabelContainer>
        <PasswordFormContainer>
            <InputLabel>Senha *</InputLabel>
            <InputPass 
            name='password'
            value={form.password}
            placeholder= 'Mínimo 6 caracteres'
            onChange={onChange}
            type={"password"}
            require
            />
            <PasswordIconImg src={Visible}/>
        </PasswordFormContainer>     

      <MainButton>
          Entrar
      </MainButton>
  </InputsContainer>
</form>
  )
}
export default LoginForm