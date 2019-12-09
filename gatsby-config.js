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

module.exports = ({
  postPath = 'content/posts',
  mdxExtensions = ['.mdx', '.md'],
  htmlLang = 'en'
}) => ({
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: postPath
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
        extensions: mdxExtensions,
        plugins: mdxPlugins,
        remarkPlugins: mdPlugins,
        gatsbyRemarkPlugins: mdxPlugins
      }
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: htmlLang
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-sitemap`
    // `gatsby-plugin-offline`
  ]
})
