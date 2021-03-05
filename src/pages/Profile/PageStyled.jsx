import styled from 'styled-components'
import Pencil from '../img/icons/pencil.png'

export const Div = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const ScreenContainer = styled.div`
    //background-color: #fff000;
    height: 90%;
    width: 35%;
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    border-radius:10px;
    border: 0.5px solid black;
    display: flex;
    justify-content:center;
    @media(min-width: 500px) and (max-width: 800px) {
      width: 80%;
    };

    @media(max-width: 499px) {
        width: 99%;
    }  
`;

export const Header= styled.div`
 height: 15%;
 text-align: center;
 font-size: 18px;
`
export const UserContainer = styled.section`
  background-color:#f6f6f6;
  height: 30%;
  font-size: 18px;
  display:flex;
`

export const AddressContainer = styled.section`
  background-color:#E9E9E9;
  height: 30%;
  font-size: 18px;
  display:flex;
`

export const InfoDados = styled.div` 
width: 90%;
height: 100%;
`;

export const Pen = styled.div` 
width: 10%;
height: 100%;
display: flex;
flex-direction: center;
background-image: url(${Pencil});
background-repeat: no-repeat;
background-size:50%;
align-items: center;
`;

export const AddressSection = styled.section`
  width:90%;
  height: 25%;
  `;
export const TextAddress = styled.p`
  color:#5e0707;
  font-size: 19px;
  font-weight: 500;
  text-align: center;
  font-family: 'Calibri', 'Trebuchet MS', 'sans-serif';
`

export const StreetAddress = styled.p`
  font-size: 18px;
  margin-left: 2rem;
 
`
export const HistoricRequests = styled.section`
  font-size: 18px;
  height:30%;
  background-color: #f6f6f6;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px; 
`
export const Li = styled.li` 
list-style: none;
margin-left: 2rem;
`;
