import { Link } from 'gatsby'
import Styled from 'styled-components'
import {normal} from '../../theme'

const {header} = normal

export const OuterLink = Styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer'
})`
  color: ${normal.outerLink.color};
`

export const InnerLink = Styled(Link)`
  color: ${header.color};
  cursor: pointer;
  text-decoration: none;
`
export const LightInnerLink = Styled(Link)`
  color: #0087ff;
  cursor: pointer;
  text-decoration: none;
`
