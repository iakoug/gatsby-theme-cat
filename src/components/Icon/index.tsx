import React from 'react'
import { theme as getTheme} from '../../theme'

const theme = getTheme()

interface Props {
  type: string
  mode?: string
  className?: string
  style?: React.CSSProperties
}

// https://remixicon.com
export const Icon = (props: Props): React.ReactElement => {
  const {
    type = '',
    mode = 'line',
    className = '',
    style = {
      color: theme.icon.color
    }
  } = props

  return <i className={`ri-${type}-${mode || 'line'} ${className}`} style={style} />
}
