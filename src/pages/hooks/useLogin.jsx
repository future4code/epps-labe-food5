import axios from 'axios'
import { useHistory } from 'react-router'
import useForm from './useForm'

export default function Login() {
    const [form, handleInputChange] = useForm({})
    const history = useHistory()

    const Login = (event) => {
        event.preventDefault()
        const body = {
            email: form.email,
            password: form.password
        }

        axios.post("https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/login", body)
            .then((Response) => {
                console.log("aqui é bla", Response.data)
                localStorage.setItem("token", Response.data.token)
                history.push('/feed')
                alert("Logado com exito")
            })
            .catch((error) => {
                console.log(error)
                alert("Erro no login! Favor tente novamente")
            })
    }
return[handleInputChange, form, Login]
}
