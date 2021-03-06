import React, { useLayoutEffect, useState } from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import { Button, ThemeProvider } from '@material-ui/core';
import { Campo, Div, FormAddre, H3, theme,ScreenContainer } from './AddressStyle';
import { goToFeedPage } from '../../routes/Coordinator';
import { useHistory } from 'react-router-dom'
import useProtectedPage from '../../hooks/useProtectedPage'


const ProfileAddress = () => {
    useProtectedPage()
    const history = useHistory();

    //validação do usuário por meio do token//  
    useLayoutEffect(() => {
        if(localStorage.getItem("token") == null){
          goToFeedPage(history)
        }
      }, [])

    //Cadastro do endereço//
    const [form, setForm ] = useState({
      street: "", 
      number: "", 
      neighbourhood: "", 
      city: "", 
      state: "", 
      complement: ""
    })
                                        
    const newAddress = (event) =>{
        event.preventDefault();
        const { name, value } = event.target
        setForm({...form, [name]: value})
    }
    
    const CadAdrres = () => {
        console.log(form);
        // const elemento = document.getElementById("form-enderec")
        // const valido = elemento.checkValidity()
        // elemento.reportValidity()
        // if(valido){
                axios.put(`https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/address`,form,{
                    headers:{
                               auth: localStorage.getItem('token')
                           }
               }).then((Response)=> {
                   console.log("aqui é bla",Response.data)
                localStorage.setItem("token", Response.data.token) 
                history.push('/profile')  
                alert("Endereço atualizado com sucesso")})
                .catch((error) => {
                    console.log(error)
                    alert("Erro na atualização! Favor tente novamente")
                })
                }
    //}
    
     return (
        <Div>
              <ScreenContainer>            
                <form  id="form-enderec" style={{width: '90%'}}>
                    <H3>Meu Endereço</H3>
                        <FormAddre> 
                        
                            <Campo>
                                         
                                <TextField
                                    required
                                    id="id-street"
                                    label="Logradouro"
                                    placeholder="Rua/AV"
                                    name="street"
                                    value={form.street}
                                    onChange={newAddress}
                                    type="text"
                                    variant="outlined"
                                    fullWidth                                    
                                    InputLabelProps={{
                                        shrink: true,
                                        }}
                                />                                
                            </Campo>
                            <Campo>
                                <TextField
                                    required
                                    id="number-log"
                                    label="Numero"
                                    placeholder="Numero"
                                    name="number"
                                    value={form.number}
                                    onChange={newAddress}
                                    type="number"
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                        }}
                                />
                            </Campo> 

                            <Campo>
                                <TextField
                                    id="complement-log"
                                    label="Complemento"
                                    placeholder="Apto./Bloco"
                                    name="complement"
                                    value={form.complement}
                                    onChange={newAddress}
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps={{
                                    shrink: true,
                                    }}                                    
                                />
                            </Campo>
                                                       
                            <Campo>
                                <TextField
                                    required
                                    id="neighbourhood-log"
                                    label="Bairro"
                                    placeholder="Bairro"
                                    name="neighbourhood"
                                    value={form.neighbourhood}
                                    onChange={newAddress}
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                        }}
                                />
                            </Campo>                            
                            <Campo>
                                <TextField
                                    required
                                    id="city-log"
                                    label="Cidade"
                                    placeholder="Cidade"
                                    name="city"
                                    value={form.city}
                                    onChange={newAddress}
                                    variant="outlined"
                                    fullWidth                              
                                    InputLabelProps={{
                                        shrink: true,
                                        }}
                                />
                            </Campo>
                            <Campo>
                                <TextField
                                    required
                                    id="state-log"
                                    label="Estado"
                                    placeholder="Estado"
                                    name="state"
                                    value={form.state}
                                    onChange={newAddress}
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps={{
                                    shrink: true,
                                    }}                                    
                                />
                            </Campo>                            
                            <Campo>
                                <ThemeProvider theme={theme}>
                                    <Button 
                                        onClick={CadAdrres}
                                        fullWidth
                                        variant="contained" 
                                        color="primary" 
                                       
                                    >Salvar</Button>
                                </ThemeProvider>
                            </Campo>
                        
                        </FormAddre>    
                </form>
              </ScreenContainer>
      </Div>
    )
}
export default ProfileAddress;
