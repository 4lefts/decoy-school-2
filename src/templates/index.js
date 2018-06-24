import React from 'react'
import Sidebar from '../components/sidebar'


export default ({data}) => {
    const {markdownRemark, allFile} = data
    const {frontmatter, html, headings} = markdownRemark
    return (
        <div className="homepage-content">
            <div className="hero">
                <h1><span>Welcome to<br /></span>Decoy<br />Community<br />Primary<br />School</h1>
            </div>
            <div className="container">
                <main dangerouslySetInnerHTML={{__html: html}} />
                <Sidebar />
            </div>
        </div>
    )
}

export const pageQuery = graphql`
    query indexPageByPath($path: String!){
        markdownRemark(frontmatter: {path: {eq: $path}}){
            html
            headings {
                value
                depth
            }
            frontmatter{
                title
                path
                toc
            }
        }
    }
`