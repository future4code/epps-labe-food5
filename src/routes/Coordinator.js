export const goToLogin = (history) => {
    history.push('/login')
}

export const goToFeed = (history) => {
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