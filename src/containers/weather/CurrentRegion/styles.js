import styled from 'styled-components'

export const StyledSection = styled.h3`
    margin: 10px;
    padding: ${({padding}) => padding ? '10px': null};;
    border: 1px solid ${({theme}) => theme.colors.gray};
    border-radius: 12px;
    font-size: ${({theme}) => theme.fontSizes.medium};
    text-align: center;
    font-weight: lighter;
    letter-spacing: 0.05rem;
    ${({height}) => height ? `height: ${height}` : null};
    position: relative;
`

export const StyledButton = styled.button`
    padding: 5px 20px;
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

export const Wrapper = styled.div`
    padding: 10px;
`