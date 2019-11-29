import { apiUrl, regionUrl, weatherUrl } from './constants'

export const getRegion = (latitude, longitude) => {
    return fetch(`${apiUrl}${regionUrl}${latitude},${longitude}`)
        .then(data => {
            if (!data.ok) {
                throw new Error('error')
            }

            return data.json()
        })
        .catch(error => {throw new Error('error')})
}


export const getWeather = ( region ) => {
    return fetch(`${apiUrl}${weatherUrl}${region}`)
        .then(data => {
            if (!data.ok) {
                throw new Error('error')
            }

            return data.json()
        })
        .catch(error => {throw new Error('error')})
}


