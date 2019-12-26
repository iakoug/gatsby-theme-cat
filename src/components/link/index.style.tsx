import { Link } from 'gatsby'
import Styled from 'styled-components'
import { theme as getTheme} from '../../theme'

const theme = getTheme()

export const OuterLink = Styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer'
})`
  color: ${theme.outerLink.color};
`

export const InnerLink = Styled(Link).attrs({
  className: 'theme-header'
})`
  color: ${theme.header.color};
  cursor: pointer;
  text-decoration: none;
`
export const LightInnerLink = Styled(Link)`
  color: #0087ff;
  cursor: pointer;
  text-decoration: none;
`
