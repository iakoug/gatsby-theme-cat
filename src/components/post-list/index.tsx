import React from 'react'
import { PostCard } from '../post-card'
import * as S from './index.style'

interface Props {
  posts: Wink.NodeBase[]
}

export const PostList = (props: Props): React.ReactElement => {
  const postNodeList = props.posts.map(
    (post: Wink.NodeBase, index: number): React.ReactElement => {
      return <PostCard key={index} post={post} />
    }
  )

  return (
    <S.Wrapper>
      <S.List>{postNodeList}</S.List>
    </S.Wrapper>
  )
}
