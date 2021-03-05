import React from "react";
import { PasswordFormContainer, InputPass, PasswordIconImg, InputLabel } from "./styled"
import Visible from '../pages/img/icons/senha-2.png';



const InputPassword = ()=>{
    return(
        <PasswordFormContainer>
            <InputLabel>Senha *</InputLabel>
            <InputPass />
            <PasswordIconImg src={Visible}/>
        </PasswordFormContainer>
    )
}
export default InputPassword;