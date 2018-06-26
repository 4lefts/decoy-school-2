import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import '../scss/index.scss'

const Layout = ({ children, data }) => {
  const footerLogos = data.allFile.edges.map(x => x.node.publicURL)
  return (
    <div id="page-outer">
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
        link={[
          {
            href: 'https://fonts.googleapis.com/css?family=Lato',
            rel: 'stylesheet'
          }
        ]}
      />
      <Header siteTitle={data.site.siteMetadata.title} pages={data.allMarkdownRemark.edges} />
      <div>
        {children()}
      </div>
      <Footer logoURLs={footerLogos}/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query siteQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: {fields: [frontmatter___order], order: ASC}
    ){
      edges{
        node{
          frontmatter{
            path
            title
            navTitle
            order
          }
        }
      }
    }
    allFile(filter: {relativePath: {regex: "/footerLogos/"}}) {
      edges {
          node {
            publicURL
          }
      }
    }
  }
`
