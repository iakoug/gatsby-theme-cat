import React from 'react'
import { OuterLink } from '../link'
import Logo from '../logo'
import * as S from './index.style'

interface Props {
  siteMeta: Wink.Site
}

const Header = (props: Props): React.ReactElement => {
  return (
    <S.Wrapper>
      <S.HeaderContainer>
        <S.LogoSection to="/">
          <Logo />

          <S.LogoTitle>
            {props.siteMeta.siteMetadata.title.toUpperCase()}
          </S.LogoTitle>
        </S.LogoSection>

        <OuterLink
          title="search this site"
          href="https://www.google.com/search?q=rollawaypoint"
        >
          {/* placeholder */}
          {/* <S.SearchIcon /> */}
        </OuterLink>
      </S.HeaderContainer>
    </S.Wrapper>
  )
}

export default Header
