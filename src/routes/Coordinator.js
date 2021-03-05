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
        history.push("/signUp")
}

export const goToUserPage = (history)=>{
        history.push('/user')
    }

export const goToAdressPage = (history) => {
        history.push ('/address')
    }

export const goToProfilePage = (history) =>{
        history.push('/profile')
    }
