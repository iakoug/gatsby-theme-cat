import Styled from 'styled-components'
import { Icon } from '../Icon'

export const LogoIcon = Styled(Icon).attrs({
  className: 'theme-logo',
  type: 'goblet'
})`
    padding-right: 8px;
    font-size: 24px !important;
    vertical-align: sub;
`
