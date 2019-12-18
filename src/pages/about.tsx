import React from 'react'
import Styled from 'styled-components'
import { graphql } from 'gatsby'

import { Layout } from '../components/layout'

interface Props {
  data: {
    site: Wink.Site
  }
}

const Flex = Styled.div`
  width: 80%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 50px auto 100px;

  p {
    text-indent: 28px;
  }
`

export default (props: Props): React.ReactElement => {
  const { data } = props

  return (
    <Layout
      title={data.site.siteMetadata.title}
      description={data.site.siteMetadata.description}
      siteMeta={data.site}
    >
      <Flex>
        <h3>Jump to the hell</h3>
        <p>Let me share a recurring nightmare I have with you. </p>
        <p>
          In this dream, I'm sitting down in front of a computer which boots up,
          running an operating system I've written. I then launch a web browser
          I've created from scratch, all by myself, and navigate to a website
          I've constructed. I click on the first link and the whole thing
          bluescreens. And the bluescreen itself bluescreens and begins to fold
          in on itself, collapsing into a massive explosion that destroys an
          entire city block.
        </p>
        <p>
          That's the good version of the dream. In the other one, there's just
          ... screaming. And darkness.
        </p>
      </Flex>
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

  query SiteLayoutInfo {
    site {
      ...SiteInfo
    }
  }
`
