import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { createHslString } from 'utils'

import Loader from 'components/Loader'

import { StyledBackground, StatisticsWrapper, StyledImage } from './styles'

const errorTitle = 'Error occurred, try to reload.'

const colors = {
    coldColor: 180,
    mediumColor: 58,
    warmColor: 33 
}

const temperatureStatuses = {
    medium: 10,
    warm: 30,
    cold: -10
}

const temperatureValues = {
    ...colors,
    ...temperatureStatuses
}

const calculateColor = ( temperature ) => {
    
    if (temperature < temperatureValues.cold) {
        return createHslString(temperatureValues.coldColor)
    } else if (temperature >= temperatureValues.cold && temperature <= temperatureValues.medium) {
        const range = Math.abs(temperatureValues.coldColor - temperatureValues.mediumColor)
        const colorRange = Math.abs(temperatureValues.cold - temperatureValues.medium)
        const coefficient = range / colorRange;

        return createHslString(temperatureValues.coldColor - (Math.abs(temperatureValues.cold) + temperature) * coefficient)
    } else if (temperature > temperatureValues.medium && temperature <= temperatureValues.warm) {
        const range = Math.abs(temperatureValues.mediumColor - temperatureValues.warmColor)
        const colorRange = Math.abs(temperatureValues.warm + temperatureValues.medium)
        const coefficient = range / colorRange

        return createHslString(temperatureValues.mediumColor - temperature * coefficient) 
    } else {
        return createHslString(temperatureValues.warmColor) 
    }
}

const CurrentWeather = ({ weatherData, weatherLoading, weatherError }) => (
<Fragment>
    { !weatherData && !weatherLoading && !weatherError &&
        <div>Weather will be shown here</div>
    }
    { weatherLoading &&
        <Loader />
    }
    { weatherError &&
        <div>{errorTitle}</div>
    }
    { weatherData &&
        <Fragment>
            <StyledBackground color={calculateColor(-9)} />
            <StatisticsWrapper>
                <StyledImage
                    src={`https://www.metaweather.com/static/img/weather/${weatherData.abbr}.svg`}
                    alt="weather-icon"
                />
                <div>Temperature: {weatherData.temperature} C</div>
                <div>{weatherData.weatherName}</div>
            </StatisticsWrapper>
        </Fragment>
    }
</Fragment>
)


CurrentWeather.propTypes = {
    weatherData: PropTypes.object,
    weatherLoading: PropTypes.bool,
    weatherError: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
}

export default CurrentWeather