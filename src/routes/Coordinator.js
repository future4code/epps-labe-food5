export const goToLogin = (history) => {
    history.push('/login')
}

export const goToFeedPage = (history) => {
    history.push('/feed')
}

export const goToRestaurant = (history, restaurantId) => {
        history.push(`/restaurant/${restaurantId}`)
    }

export const goToSignUp = (history) => {
        history.push("/sign-up")
    }

export const goToPerfil = (history)=>{
        history.push('/perfil')
    }

export const goToAdressPage = (history) => {
        history.push ('/endereco')
    }

export const goToProfilePage = (history) =>{
        history.push('/perfil')
    }