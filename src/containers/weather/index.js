import React, { Fragment, useEffect, useReducer } from 'react'
import { getRegion, getWeather } from 'api'
import PropTypes from 'prop-types'
import weatherReducer, { initialState, actionTypes } from 'store'
import CurrentRegion from './CurrentRegion'

import Article from 'components/Article'

const Weather = ({ currentLocation }) => {
    const [store, dispatch] = useReducer(weatherReducer, initialState)
    const {weatherError, weatherLoading, regionLoading, regionError, location, currentRegion, weatherData} = store

    const fetchRegion = async (latitude, longitude) => {
        try {
            const results = await getRegion(latitude, longitude)
            const nearestResult = results[0];
            dispatch({type: actionTypes.RESOLVE_REGION, payload: nearestResult})
        } catch (error) {
            dispatch({type: actionTypes.REGION_ERROR_OCCURRED, payload: error})
        }
    }

    const fetchWeather = async (region) => {
        try {
            const results = await getWeather(region)
            const {the_temp, weather_state_abbr, weather_state_name} = results.consolidated_weather[0]
            const mappedData = {
                temperature: the_temp,
                abbr: weather_state_abbr,
                weatherName: weather_state_name
            }
            dispatch({type: actionTypes.RESOLVE_WEATHER_DATA, payload: mappedData})
        } catch (error) {
            dispatch({type: actionTypes.WEATHER_ERROR_OCCURRED, payload: error})
        }

    }

    useEffect(() => {
        if (currentLocation) {
            dispatch({type: actionTypes.SET_LOCATION, payload: currentLocation})
        } else {
            dispatch({type: actionTypes.LOCATION_ERROR, payload: 'location error'})
        }
    }, [currentLocation])

    useEffect(() => {
        if (location) {
            dispatch({type: actionTypes.REQUEST_REGION})
            fetchRegion(location.coords.latitude, location.coords.longitude)
        }

    }, [location])

    const requestWeather = ( region ) => {
        if (region.hasOwnProperty('woeid')) {
            dispatch({type: actionTypes.REQUEST_WEATHER})
            fetchWeather(region.woeid)
        }
    }

    return (
        <Fragment>
            <Article title={'Welcome to weather app'} />
            <CurrentRegion
                region={currentRegion}
                loading={regionLoading}
                error={regionError}
                requestWeather={requestWeather}
                weatherInfo={{
                    weatherData,
                    weatherLoading,
                    weatherError
                }}
            />
        </Fragment>
    )
}

Weather.propTypes = {
    currentLocation: PropTypes.object
}

export default Weather
