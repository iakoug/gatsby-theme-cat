import React from 'react'
import * as S from './index.style'

interface Props {
  posts: string[]
}

export const PostsList = (props: Props): React.ReactElement => {
  const postNodeList = props.posts.map(
    (id: string, index: number): React.ReactElement => {
      return (
        <S.List key={index}>
          <S.PostLink to={id}>{id.replace(/\/post\//, '')}</S.PostLink>
        </S.List>
      )
    }
  )

  return <S.Wrapper>{postNodeList}</S.Wrapper>
}
