import React from 'react'
import Sidebar from '../components/sidebar'


export default ({data}) => {
    const {markdownRemark, allFile} = data
    const {frontmatter, html, headings} = markdownRemark
    return (
        <div className="container page-content">
            <h1>{frontmatter.title}</h1>
            <main dangerouslySetInnerHTML={{__html: html}} />
            <Sidebar />
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