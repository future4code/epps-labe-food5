import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Largura, Pagina, Titulo } from './styleAddress'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function PofileAddress() {
  const classes = useStyles();
  return (
    <Pagina>
      <Titulo>      
        <h1>Endereço</h1>     
      </Titulo>      
    <Largura>
    <div className={classes.paper}>
    <React.Fragment>
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Logradouro (Rua, Av.)"
              fullWidth
              autoComplete="shipping address-line1"
            />
        </Grid>
      
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Number"
            name="number"
            label="Número"
            fullWidth
            autoComplete="number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="complemento"
            name="complemento"
            label="Complemento"
            fullWidth
            autoComplete="complemento"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="bairro"
            name="bairro"
            label="Bairro"
            fullWidth
            autoComplete="neighborhood"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Cidade"
            fullWidth
            autoComplete="cidade"
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid> */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="state"
            name="state"
            label="Estado - UF"
            fullWidth
            autoComplete="state"
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <TextField
            id="country"
            name="country"
            label="País"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid> */}
        <Grid item xs={6}>
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Salvar
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
    </div>
    </Largura>
    </Pagina>
  );
}

