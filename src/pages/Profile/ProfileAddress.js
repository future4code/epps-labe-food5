import React, { useLayoutEffect, useState } from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import { Button, ThemeProvider } from '@material-ui/core';
import { Campo, Div, FormAddre, H3, theme,ScreenContainer } from './AddressStyle';
import { goToFeed } from '../../routes/Coordinator';
import { useHistory } from 'react-router-dom'
//import useProtectedPage from '../hooks/useProtectedPage';


const ProfileAddress = () => {
    //useProtectedPage()
    const history = useHistory();
    //validação do usuário por meio do token//  
    useLayoutEffect(() => {
        if(localStorage.getItem("token") == null){
          goToFeed(history)
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

        const { name, value } = event.target
        setForm({...form, [name]: value})
    }
    
    const CadAdrres = () => {
        console.log(form);
        const elemento = document.getElementById("form-enderec")
        const valido = elemento.checkValidity()
        elemento.reportValidity()
        if(valido){
                axios.put(`https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/address`,form,{
                    headers:{
                               auth: localStorage.getItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImliZHVaSW9Ta280U1pmaXRUTU5zIiwibmFtZSI6IkZyZWUgV2lsbGlhbSIsImVtYWlsIjoiZnJlZS53aWxsaWFtQGZ1dHVyZTQuY29tIiwiY3BmIjoiMTIzLjQ1Ni43ODktMDAiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiQXYuIEhvcsOhY2lvIExhZmVyLCA1MDAsIFZpdHJhIFRvd2VyIC0gSXRhaW0gQmliaSIsImlhdCI6MTYxNDc3MzIyOX0.L_efDQhyT2F6gXMNkTk005ijxG8l9YakIQYgp-idZYU')
                           }
               }).then((Response)=> {
                localStorage.setItem("token", Response.data.token)   
                alert("ok")})
                .catch((error) => {
                    console.log(error)
                    alert("Erro tente cadastrar novamente")
                })
                }
    }
    
     return (
        <Div>
              <ScreenContainer>            
                <form id="form-enderec" style={{width: '90%'}}>
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
