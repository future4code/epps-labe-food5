import styled from 'styled-components'
import { createMuiTheme, darken } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
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
    height: 115%;
    width: 35%;
    margin-top: 5%;
    display: flex;
    box-shadow: 0 0.5px 0 0 #d8d8d8;
    border: 1px solid black;
    display: flex;
    justify-content:center;
    @media(min-width: 500px) and (max-width: 800px) {
      width: 80%;
    };

    @media(max-width: 499px) {
        width: 99%;
    }
    
`;
export const FormAddre = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
`;
export const H3 = styled.h2`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Campo = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    font-weight: 800;
    
`;


export const theme = createMuiTheme({
    palette: {
      primary: green,
      typography: {
        htmlFontSize: 20,
        },
    },
    typography: {
      htmlFontSize: 20,
      },
    
  });
