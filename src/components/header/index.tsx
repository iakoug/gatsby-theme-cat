import React from 'react'
import Logo from '../logo'
import * as S from './index.style'
import { changeThemeMode } from '../../theme'

interface Props {
  siteMeta: Wink.Site
}

const modeTxt = () => {
  let txt = `dark mode`

  try {
    const darkMode = window.localStorage.getItem('dark-mode') !== '0'

    txt = darkMode ? 'white mode' : 'dark mode'
  } catch (e) {}

  return txt
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

        <S.Mode onClick={changeThemeMode()}>{modeTxt()}</S.Mode>
      </S.HeaderContainer>
    </S.Wrapper>
  )
}

export default Header
