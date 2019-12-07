import Styled from 'styled-components'
import { InnerLink } from '../link'
import { Icon } from '../Icon'

export const Wrapper = Styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    z-index: 9999;
    background: #fff;
    top: 0;
    left: 0;
    height: 80px;
    box-sizing: border-box;
    width: 100vw;
    padding: 0 10%;
    margin-top: 48px;
`

export const HeaderContainer = Styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LogoSection = Styled(InnerLink)``

export const LogoIcon = Styled(Icon).attrs({
  type: 'goblet'
})`
    padding-right: 8px;
    font-size: 24px !important;
    vertical-align: sub;
`

export const LogoTitle = Styled.h1`
    display: inline-block;
    font-size: 22px;
    font-weight: 700;
`

export const SearchIcon = Styled(Icon).attrs({
  type: 'search'
})`
    margin-right: -16px;
    padding: 0 16px;
    color: #3C3F45;
    font-size: 18px;
    font-weight: 900;
    cursor: pointer;
`
