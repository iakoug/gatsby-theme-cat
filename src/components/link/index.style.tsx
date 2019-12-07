import { Link } from 'gatsby'
import Styled from 'styled-components'

export const OuterLink = Styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer'
})`
    color: rgb(15, 122, 216);

    @media screen and (min-width: 881px) {
        position: relative;
        right: 16px;
    }
`

export const InnerLink = Styled(Link)`
    color: #3C3F45;
    cursor: pointer;
    text-decoration: none;
`
