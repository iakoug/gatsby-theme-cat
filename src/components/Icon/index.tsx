import React from 'react'

interface Props {
  type: string
  mode?: 'line' | 'fill'
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
      color: '#3C3F45'
    }
  } = props

  return <i className={`ri-${type}-${mode} ${className}`} style={style} />
}
