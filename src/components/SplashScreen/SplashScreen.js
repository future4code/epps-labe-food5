import React from 'react'
import { useHistory } from 'react-router-dom'
import {SplashContainer, Logo} from './styled-splash'


function SplashScreen() {
    const history = useHistory()

    setTimeout(() => {
        history.push("/Login")
    }, 2000)

    return (
        <SplashContainer>
            <Logo src={Logo} />
        </SplashContainer>
    )
}

export default SplashScreen;