import React from 'react'
import rehypeReact from 'rehype-react'
import InfoBtn from '../components/infoBtn'

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {'info-btn': InfoBtn}
}).Compiler

const makeToc = ({headings}) => {
    const h2s = headings.filter(heading => {
        return heading.depth === 2
    }).map(heading => {
        const hrefString = `#${heading.value.toLowerCase().split(' ').join('-')}`
        return(
            <li key={heading.value}><a href={hrefString}>{heading.value}</a></li>
        )
    })
    return (
        <aside className="toc">
            <h3>On this page:</h3>
            <ul>{h2s}</ul>
        </aside>
    )   
}

export default ({data}) => {
    const {markdownRemark, allFile} = data
    const {frontmatter, htmlAst, headings} = markdownRemark
    const tableOfContents = frontmatter.toc ? makeToc({headings}) : null
    return (
        <div className="container page-content">
            <h1>{frontmatter.title}</h1>
            {tableOfContents}
            <main>
                {
                    renderAst(htmlAst)
                }
            </main>
        </div>
    )
}

export const pageQuery = graphql`
    query pageByPath($path: String!){
        markdownRemark(frontmatter: {path: {eq: $path}}){
            htmlAst
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