import React from 'react'
import rehypeReact from 'rehype-react'
import InfoBtn from '../components/infoBtn'
import personFigure from '../components/personFigure'

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
        'info-btn': InfoBtn,
        'person-pic': personFigure,
    }
}).Compiler

export default ({data}) => {
    const {markdownRemark} = data
    const {frontmatter, htmlAst} = markdownRemark
    return (
        <div className="container picture-grid-content">
            <main>
            <h1>{frontmatter.title}</h1>
            {
                renderAst(htmlAst)
            }
            </main>
        </div>
    )
}

export const pictureQuery = graphql`
    query pictureByPath($path: String!){
        markdownRemark(frontmatter: {path: {eq: $path}}){
            htmlAst
            headings {
                value
                depth
            }
            frontmatter{
                title
                path
            }
        }
    }
`