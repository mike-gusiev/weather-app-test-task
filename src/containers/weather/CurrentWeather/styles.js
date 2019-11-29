import styled from 'styled-components'

export const StyledBackground = styled.div`
    width: 100%;
    height: 100%;
    animation: animate 1s ease-in;
    animation-fill-mode: forwards;
    border-radius: 12px;

    @keyframes animate {
        0% {
            background-color: white;
        }
        100% {
            background-color: ${({color}) => color};
        }  
    }
`

export const StatisticsWrapper = styled.div`
    ${({theme}) => theme.mixins.absoluteMixin};
    padding: 10px;
    color: ${({theme}) => theme.colors.darkViolet};
    border: 1px solid ${({theme}) => theme.colors.darkViolet};
    border-radius: 12px;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        top: 60%;
    }
`

export const StyledImage = styled.img`
    width: 35px;
    display: block;
    margin: 0 auto;
`