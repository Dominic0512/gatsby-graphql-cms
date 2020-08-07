/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GraphCMS`,
        fieldName: `gcms`,
        url: `https://api-ap-northeast-1.graphcms.com/v2/ckdivuknibbfs01z2du2kfevq/master`,
      },
    },
  ],
}
