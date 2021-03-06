import React from "react";
import LoginForm from './LoginForm';
import { PageTextContainer } from "./styled";
import { TextButton } from '../../components/button/textButtonstyle'

const LoginPage = () => {   
    return (
    <div>
      <LoginForm />
      <PageTextContainer>
        <TextButton >Não possui cadastro? Clique aqui.</TextButton>
      </PageTextContainer>
     </div>
    );
  };

  export default LoginPage;