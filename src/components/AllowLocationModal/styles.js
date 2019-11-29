import styled from 'styled-components'

export const StyledWrapper = styled.div`
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    color: ${({ theme }) => theme.colors.almostBlack};
    margin: 5px 0;
    font-weight: lighter;
    letter-spacing: 0.05rem;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.almostBlack};
    border-radius: 12px;
`

export const StyledTitle = styled.h3`
    color: ${({ theme }) => theme.colors.darkViolet};
    text-transform: uppercase;
`

export const StyledButton = styled.button`
    margin: 10px auto;
    padding: 20px 40px;
    border: 2px solid ${({theme}) => theme.colors.light};
    border-radius: 12px;
    font-size: ${({theme}) => theme.fontSizes.medium};
    text-align: center;
    font-weight: lighter;
    letter-spacing: 0.03rem;
    background-color: ${({theme}) => theme.colors.darkViolet};
    color: ${({theme}) => theme.colors.light};
    transition: transform .3s ease-in;
    cursor: pointer;
    ${({ theme }) => theme.mixins.boxShadowMixin};
    outline: none;

    &:hover {
        transform: scale(1.05);
    }
`
