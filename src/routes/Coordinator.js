export const goToLogin = (history) => {
    history.push('/login')
}

export const goToFeed = (history) => {
    history.push('/')
}

export const goToRestaurant = (history, restaurantId) => {
        history.push(`/restaurant/${restaurantId}`)
    }