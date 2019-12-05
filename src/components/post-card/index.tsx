import React from 'react';
import * as S from "./index.style";

interface Props {
    post: Wink.NodeBase;
}

export const PostCard = (props: Props): React.ReactElement => {
    const { post } = props;

    return (
        <S.Wrapper to={post.fields.slug}>
            <S.Cover fluid={post.frontmatter.cover.childImageSharp.fluid} />
            <S.Main>
                <S.PostTime>{post.frontmatter.date}</S.PostTime>
                <section>
                    <S.Title>{post.frontmatter.title}</S.Title>
                    <S.SubTitle>{post.frontmatter.description}</S.SubTitle>
                </section>
            </S.Main>
        </S.Wrapper>
    );
};
