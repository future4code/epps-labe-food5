import axios from 'axios'
import { useHistory } from 'react-router'
import useForm from './useForm'
import {baseUrl} from '../Constants/url'

export default function Login() {
    const [form, onChange] = useForm({})
    const history = useHistory()

    const Login = (event) => {
        event.preventDefault()
        const body = {
            email: form.email,
            password: form.password
        }

        axios.post(`${baseUrl}/login`, body)
            .then((response) => {
                console.log(response.data)
                localStorage.setItem("token", response.data.token)
                alert("Logado com exito")
                history.push('/feed')
            })
            .catch((error) => {
                console.log(error)
                alert("Erro no login! Favor tente novamente")
            })
    }
return [onChange, form, Login]
}
