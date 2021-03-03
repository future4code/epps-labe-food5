import React, { useState, useLayoutEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'
import { useHistory } from 'react-router-dom'



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

export default function ProfileUser() {
  const classes = useStyles();
  const history = useHistory()

  const token = useLayoutEffect(() => {
    if(localStorage.getItem("token") == null) {
      alert("em token") //goToLogin(history)
    }  
    }, [])
    console.log(token);

  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("")

  const onChangeName = (event) => {
  setName(event.target.value)
  } 
    
  const onChangeEmail = (event) => {
  setEmail(event.target.value)
  } 

  const onChangeCpf = (event) => {
        setCpf(event.target.value)
    }
    
    const createUser = (event) => {
        event.preventDefault();
        const body = {
            email: email,
            cpf: cpf,
            name: name,
        };
    }
    
    
    
    const onSubmitForm = (event) => {
      event.preventDefault();
      const body = {
        name: name,    
        email: email,
        cpf: cpf
      };
    axios.put("https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/profile", body,{headers:{auth:"token"}}            
    ).then((response) => {
      window.localStorage.setItem("token", response.data.token);
      history.push('/timeline')
      setName("")
      setEmail("")
      setCpf("")
      alert("Usuário logado com êxito");

    }).catch((error) => alert(error.response.data.message))
    };
    
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
       
        <Typography component="h1" variant="h5">
          Editar
        </Typography>
        <form onSubmit={onSubmitForm} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="Name"
                name="Nome"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Nome"
                value={name}
                autoFocus
                onChange={onChangeName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                value={email} 
                name="email"
                autoComplete="email"
                onChange={onChangeEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Cpf"
                label="Cpf"
                id="Cpf"
                type="text"
                value={cpf}
                autoComplete="Cpf"
                onChange={onChangeCpf}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Quero receber aviso das pomoções por email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Salvar
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              {/* <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link> */}
            </Grid>
          </Grid>
        </form>
      </div>
      {/* <Box mt={5}>
        <Copyright />
      </Box> */}
    </Container>
  );
}