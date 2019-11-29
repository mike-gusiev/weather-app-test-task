export const actionTypes = {
    REQUEST_REGION: 'REQUEST_REGION',
    REGION_ERROR_OCCURRED: 'REGION_ERROR_OCCURRED',
    RESOLVE_REGION: 'RESOLVE_REGION',
    REQUEST_WEATHER: 'REQUEST_WEATHER',
    WEATHER_ERROR_OCCURRED: 'WEATHER_ERROR_OCCURRED',
    RESOLVE_WEATHER_DATA: 'RESOLVE_WEATHER_DATA',
    SET_LOCATION: 'SET_LOCATION',
    LOCATION_ERROR: 'LOCATION_ERROR'
}

export const initialState = {
    weatherData: null,
    currentRegion: null,
    regionLoading: false,
    regionError: null,
    weatherLoading: false,
    weatherError: null,
    location: null,
    locationError: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_LOCATION:
            return {
                ...state,
                location: action.payload
            }
        case actionTypes.LOCATION_ERROR:
            return {
                ...state,
                locationError: action.payload
            }
        case actionTypes.REQUEST_REGION:
            return {
                ...state,
                regionLoading: true
            }
        case actionTypes.REQUEST_WEATHER:
            return {
                ...state,
                weatherLoading: true
            }
        case actionTypes.REGION_ERROR_OCCURRED:
            return {
                ...state,
                regionError: action.payload,
                regionLoading: false
            }
        case actionTypes.WEATHER_ERROR_OCCURRED:
            return {
                ...state,
                weatherError: action.payload,
                weatherLoading: false
            }
        case actionTypes.RESOLVE_REGION:
            return {
                ...state,
                currentRegion: action.payload,
                regionLoading: false
            }
        case actionTypes.RESOLVE_WEATHER_DATA:
            return {
                ...state,
                weatherData: action.payload,
                weatherLoading: false
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer
