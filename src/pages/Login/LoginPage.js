import React from "react";
import { goToSignUp } from '../../routes/Coordinator';
import LoginForm from './LoginForm';
import { useHistory } from "react-router-dom";
import { PageTextContainer } from "./styled";
import { TextButton } from '../../components/button/textButtonstyle'


const LoginPage = () => { 
    const history = useHistory()  
  
    return (
    <div>
      <LoginForm />
      <PageTextContainer>
        <TextButton >Não possui cadastro? <span onClick={() =>goToSignUp(history)}>Clique aqui</span></TextButton>
      </PageTextContainer>
  
     </div>
    );
  };
  export default LoginPage;