import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Div, Boton, InfoDados, Pen, Header, AddressContainer, UserContainer, AddressSection, TextAddress, StreetAddress, HistoricRequests, ScreenContainer, Li} from './PageStyled'
import { useHistory } from 'react-router-dom'

const Profile = () => {
    const history = useHistory();
    // AQUI DEVERIA VIR PROTECT PAGE
    const [user, setUser] = useState ({})
    const [address, setAddress] = useState ('')

    useEffect(() => {
        const getUser = () =>{
            axios.get('https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/profile', {
                headers: {
                    auth: localStorage.getItem("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImliZHVaSW9Ta280U1pmaXRUTU5zIiwibmFtZSI6IkZyZWUgV2lsbGlhbSIsImVtYWlsIjoiZnJlZS53aWxsaWFtQGZ1dHVyZTQuY29tIiwiY3BmIjoiMTIzLjQ1Ni43ODktMDAiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiQXYuIEhvcsOhY2lvIExhZmVyLCA1MDAsIFZpdHJhIFRvd2VyIC0gSXRhaW0gQmliaSIsImlhdCI6MTYxNDc3MzIyOX0.L_efDQhyT2F6gXMNkTk005ijxG8l9YakIQYgp-idZYU")
                }
            }).then(response => {
                setUser(response.data.user)
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
        } 
        getUser()
    }, []);

    return (
        <Div>
          <ScreenContainer>
          
                <Header>
                    <h2>Meu perfil</h2>
                </Header>
                
                <UserContainer>
                    <InfoDados>
                    <TextAddress>Dados pessoais</TextAddress>
                    <Li>Nome: { user.name } </Li>
                    <Li>Email: { user.email } </Li>
                    <Li>Cpf: { user.cpf } </Li>
                    </InfoDados>
                    <Pen Boton onClick = {() => history.push('/user')} >                    
                    </Pen>                                
                </UserContainer>

                <AddressContainer>
                <AddressSection>
                    <TextAddress>Endereço Cadastrado</TextAddress>
                    <StreetAddress> Palacio Guanabara</StreetAddress>                    
                </AddressSection>
                <Pen Boton onClick = {() => history.push('/address')} >
                    
                </Pen>  
                </AddressContainer> 
                  
                   
                   <HistoricRequests>
                       <TextAddress>Histórico de pedidos</TextAddress>
                       
                   </HistoricRequests>      
               
          
          </ScreenContainer> 
        </Div>
        
    )
}
export default Profile