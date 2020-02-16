import React from 'react'
import * as S from './index.style'

const Logo = (type = 'goblet'): React.ReactElement => {
  return <S.LogoIcon type={type} />
}

export default Logo
