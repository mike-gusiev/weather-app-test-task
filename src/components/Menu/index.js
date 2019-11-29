import React, { Fragment, useContext } from 'react'
import { SiteInfoContext } from '../../App' 

import Backdrop from '../Backdrop/index'

import { apiUrl } from 'api'

import { 
    StyledMenu,
    StyledNavLink,
    LinksWrapper,
    StyledAnchorLink
} from './styles'


const Menu = ({ open, setOpen }) => {

    const { author, siteName, year, gitHubRepo } = useContext(SiteInfoContext);

    return (
        <Fragment>
            { open &&
                <Backdrop zIndex={10} onClose={() => setOpen(!open)} />
            }
            <StyledMenu open={open}>
                <StyledNavLink href="/">
                    { siteName }
                </StyledNavLink>
                <LinksWrapper>
                    <StyledAnchorLink target="blank" href={apiUrl}>
                        MetaWeather API
                    </StyledAnchorLink>
                    <StyledAnchorLink target="blank"  href={gitHubRepo}>
                        Git Hub Repo
                    </StyledAnchorLink>
                </LinksWrapper>
                <StyledAnchorLink>
                    {`${author} ${year}`}
                </StyledAnchorLink>
            </StyledMenu>
        </Fragment>
    )
}


export default Menu;