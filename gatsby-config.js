const mdPlugins = [require('remark-slug')]

const mdxPlugins = [
  `gatsby-remark-katex`,
  {
    resolve: `gatsby-remark-images`,
    options: {
      maxWidth: 1200,
      linkImagesToOriginal: false,
      withWebp: true
    }
  },
  {
    resolve: `gatsby-remark-prismjs`,
    options: {
      showLineNumbers: true,
      aliases: {
        sh: 'bash'
      }
    }
  }
]

module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `chris kwok`,
    siteUrl: `https://justwink.github.io/`,
    description: `chriskwok's Personal Blog`,
    author: `chris kwok`,
    authorURL: `https://justwink.github.io/`,
    socials: [
      {
        icon: 'mail-send',
        name: 'Email',
        url: 'mailto:baozaodexianyu@163.com'
      },
      {
        icon: 'github',
        name: 'GitHub',
        url: 'https://github.com/justwink'
      },
      {
        icon: 'netease-cloud-music',
        name: 'NetEase',
        url: 'https://music.163.com/#/user/home?id=65978744'
      },
      {
        icon: 'wechat',
        name: 'Wechat',
        url: '/wechat.jpeg'
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'chris kwok',
        short_name: 'christian',
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: 'static/favicon.png'
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: 'content'
      }
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        plugins: mdxPlugins,
        remarkPlugins: mdPlugins,
        gatsbyRemarkPlugins: mdxPlugins
      }
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'zh'
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-sitemap`
  ]
}
