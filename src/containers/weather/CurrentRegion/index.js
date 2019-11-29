import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Article from 'components/Article'
import Loader from 'components/Loader'
import CurrentWeather from '../CurrentWeather'

import { StyledSection, StyledButton, Wrapper } from './styles'

const errorTitle = 'Error occurred, try to reload. If its a CORS problem try to add Moesif CORS google extension and switch it on'

const Region = ({ loading, error, region, requestWeather, weatherInfo }) => (
<Article height={'450px'}>
    { loading &&
        <Loader />
    }
    { error &&
        <div>{errorTitle}</div>
    }
    { region &&
        <Fragment>
            <StyledSection>
                <Wrapper>
                    <div>Nearest current location type: <b>{region.location_type}</b></div>
                    <div>Location name: <b>{region.title}</b></div>
                    <StyledButton 
                        onClick={() => requestWeather(region)}>
                            Click me to upload a weather
                    </StyledButton>
                </Wrapper>
            </StyledSection>
            <StyledSection padding={false} height={'60%'}>
                <CurrentWeather {...weatherInfo} />
            </StyledSection>
        </Fragment>
    }
</Article>
)

Region.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    region: PropTypes.object,
    requestWeather: PropTypes.func,
    weatherInfo: PropTypes.object
}

export default Region
