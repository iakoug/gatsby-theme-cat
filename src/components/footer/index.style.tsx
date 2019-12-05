import Styled from 'styled-components'

export const Wrapper = Styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 48px 0;
`

export const Copyright = Styled.span`
    display: flex;
    align-items: center;
    font-weight: 500;
`

export const SocialList = Styled.ul`
    margin-right: -16px;
    list-style: none;
`

export const SocialItem = Styled.li`
    display: inline-block;
    font-size: 16px;

    a {
        padding: 0 16px;
    }
`
