
import React, { useEffect } from "react";
import { goToFeed, goToSignUp } from '../../routes/Coordinator';
import LoginForm from './LoginForm';
import { useHistory } from "react-router-dom";
import { PageTextContainer } from "./styled";
import { TextButton } from '../../components/button/textButtonstyle'


const LoginPage = () => { 
    const history = useHistory()  
  
    return (
    <form onSubmit={() =>goToSignUp(history)}>
      <LoginForm />
      <PageTextContainer>
        <TextButton >Não possui cadastro? Clique aqui.</TextButton>
      </PageTextContainer>
  
     </form>
    );
  };
  export default LoginPage;