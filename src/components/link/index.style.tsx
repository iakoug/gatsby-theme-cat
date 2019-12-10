import { Link } from 'gatsby'
import Styled from 'styled-components'

export const OuterLink = Styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer'
})`
  color: rgb(15, 122, 216);
`

export const InnerLink = Styled(Link)`
  color: #3C3F45;
  cursor: pointer;
  text-decoration: none;
`
export const LightInnerLink = Styled(InnerLink)`
  color: #0087ff;
`
