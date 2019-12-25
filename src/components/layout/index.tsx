import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../header'
import Footer from '../footer'
import * as S from './index.style'

interface Props {
  title: string
  description: string
  children: React.ReactElement
  siteMeta: Wink.Site
}

export const Layout = (props: Props): React.ReactElement => (
  <S.Layout>
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <link
        href="https://cdn.remixicon.com/releases/v2.0.0/remixicon.css"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.11.1/katex.min.css"
      />
    </Helmet>
    <Header siteMeta={props.siteMeta} />
    {props.children}
    <Footer siteMeta={props.siteMeta} />
  </S.Layout>
)
