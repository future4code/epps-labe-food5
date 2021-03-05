import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



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

export default function PofileUser() {
  const classes = useStyles();
  const history = useHistory()

  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [username, setUserName] = useState("")

  const onChangeUserName = (event) => {
  setUserName(event.target.value)
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
            username: username,
        };
    }
    
    const onSubmitForm = (event) => {
      event.preventDefault();
      const body = {
        username: username,    
        email: email,
        cpf: cpf
      };
    axios.post("URL", body,            
    ).then((response) => {
      window.localStorage.setItem("token", response.data.token);
      history.push('/timeline')
      setUserName("")
      setEmail("")
      setCpf("")
      alert("Usuário ok");

    }).catch((error) => alert(error.response.data.message))
    };
    
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Editar
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="Name"
                name="Nome"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Nome"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Cpf"
                label="Cpf"
                type="text"
                id="cpf"
                autoComplete="Cpf"
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