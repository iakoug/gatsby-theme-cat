import React from 'react'
import { Icon } from '../Icon'
import { OuterLink } from '../link'
import * as S from './index.style'

interface Props {
  siteMeta: Wink.Site
}

const Footer = (props: Props): React.ReactElement => {
  return (
    <S.Wrapper>
      <S.Copyright>
        ©{new Date().getUTCFullYear()}
        &nbsp; Powered by 🎉
        {props.siteMeta.siteMetadata.author}
      </S.Copyright>
      <S.SocialList>
        {props.siteMeta.siteMetadata.socials.map(
          (item): React.ReactElement => (
            <S.SocialItem key={item.url}>
              <OuterLink title={item.name} href={item.url}>
                <Icon type={item.icon} mode="fill" />
              </OuterLink>
            </S.SocialItem>
          )
        )}
      </S.SocialList>
    </S.Wrapper>
  )
}

export default Footer
