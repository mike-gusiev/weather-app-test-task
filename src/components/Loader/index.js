import React from 'react'
import { PropTypes } from 'prop-types'

import { StyledLoader, StyledLoaderWrapper } from './styles'

const Loader = ({ width = 80, height = 80 }) => (
    <StyledLoaderWrapper>
        <StyledLoader 
            width={width} 
            height={height}
        >
            <div />
            <div />
        </StyledLoader>
    </StyledLoaderWrapper>
)

Loader.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
}

export default Loader
