import Styled from 'styled-components'
import {theme as getTheme} from '../../theme'

const theme = getTheme()

export  const Layout = Styled.div`
  width: 100%;
  min-width: 100%;
  background: ${theme.layout.background};
`