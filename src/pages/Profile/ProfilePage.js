export default function ProfileUser = () => {
    //useProtectedPage()
    const history = useHistory();
    //validação do usuário por meio do token//  
    useLayoutEffect(() => {
        if(localStorage.getItem("token") == null){
          goToFeed(history)
        }
      }, [])

    //Cadastro do usuário//
    const [form, setForm ] = useState({
      name: "", 
      email: "", 
      cpf: ""      
    })
                                        
    const oldUser = (event) =>{

        const { name, value } = event.target
        setForm({...form, [name]: value})
    }
    
    const CadUser = () => {
        console.log(form);
        const elemento = document.getElementById("form-user")
        const valido = elemento.checkValidity()
        elemento.reportValidity()
        if(valido){
                axios.put(`https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/profile`,form,{
                    headers:{
                               auth: localStorage.getItem('token')
                           }
               }).then((Response)=> {
                localStorage.setItem("token", Response.data.token)   
                alert("ok")})
                .catch((error) => {
                    console.log(error)
                    alert("Erro tente cadastrar novamente")
                })
                }

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
                              name="name"
                              variant="outlined"
                              required
                              fullWidth
                              id="name"
                              label="Nome"
                              value={form.name}
                              onChange={oldUser}
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
                              value={form.email}
                              onChange={oldUser}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              variant="outlined"
                              required
                              fullWidth
                              name="cpf"
                              label="Cpf"
                              id="Cpf"
                              type="text"
                              autoComplete="Cpf"
                              value={form.cpf}
                              onChange={oldUser}
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
            }