import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/layout'
import { PostsList } from '../components/posts-list'

interface Props {
  data: Wink.Posts
}

// const postReg = /SitePage \/post\//
const nameReg = /content\/(.+)\/index/
const descReg = /description:(.+)/

export default function Posts(props: Props): React.ReactElement {
  const { data } = props
  // const posts =
  //   data?.allSitePage?.edges
  //     .filter(({ node: { id } }) => postReg.test(id))
  //     .map(({ node: { id } }) => id.replace(/SitePage\ /, '')) || []

  const posts =
    data.allMdx?.nodes?.map(({ fileAbsolutePath: n, rawBody: d }) => ({
      name: n.match(nameReg)[1],
      description: d.match(descReg)[1]
    })) || []

  return (
    <Layout
      title={data.site.siteMetadata.title}
      description={data.site.siteMetadata.description}
      siteMeta={data.site}
    >
      <PostsList posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  fragment SiteInfo on Site {
    siteMetadata {
      title
      description
      siteUrl
      author
      authorURL
      socials {
        icon
        name
        url
      }
    }
    buildTime
  }

  query Posts {
    site {
      ...SiteInfo
    }

    allSitePage {
      edges {
        node {
          id
        }
      }
    }

    allMdx {
      nodes {
        id
        fileAbsolutePath
        rawBody
      }
    }
  }
`
