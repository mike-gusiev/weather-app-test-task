import React from 'react'
import PropTypes from 'prop-types'

import Modal from '../Modal'

import { StyledWrapper, StyledTitle, StyledButton } from './styles'

const AllowLocationModal = ({ onClose }) => (
    <Modal onClose={onClose}>
        <StyledWrapper>
            <StyledTitle>Glad to see you on Weather App</StyledTitle>
            <hr/>
            <div>If you wanna find out the most accurate weather at the moment</div>
            <div>please provide access to allow google use your location</div>
            <hr/>
            <div>If something went wrong try to open devTools and use</div>
            <div>Empty Cash and Hard Reload button.</div>
            <hr/>
            <div>Hope you will like this weather app <span aria-label='smile' role='img'>&#128512;</span></div>
        </StyledWrapper>
        <StyledButton onClick={onClose}>Got It</StyledButton>
    </Modal>
)

AllowLocationModal.propTypes = {
    onClose: PropTypes.func
}

export default AllowLocationModal