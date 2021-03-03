import { getByLabelText } from "@testing-library/react";
import React from "react";
import { InputLabel, InputWithLabelContainer, InputText } from "./styled";

const InputWithLabel = ()=>{
    return(
        <InputWithLabelContainer>
            <InputLabel>E-mail *</InputLabel>
            <InputText />
        </InputWithLabelContainer>
    )
}
export default InputWithLabel;