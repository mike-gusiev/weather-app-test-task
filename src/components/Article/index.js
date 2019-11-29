import React from 'react'
import PropTypes from 'prop-types'

import { StyledWrapper, StyledTitle } from './styles'

const Article = ({ width, title, children, height, relative }) => (
    <StyledWrapper relative={relative} height={height} width={width}>
        {title &&
            <StyledTitle>
                { title }
            </StyledTitle>
        }
        { children }
    </StyledWrapper>
)


Article.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.object),
        PropTypes.arrayOf(PropTypes.node)
    ]),
    width: PropTypes.string,
    height: PropTypes.string,
    relative: PropTypes.bool
}

export default Article
