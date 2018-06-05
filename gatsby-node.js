const path = require(`path`)

exports.createPages = ({boundActionCreators, graphql}) => {
    const {createPage} = boundActionCreators
    const pageTemplate = path.resolve(`src/templates/pageTemplate.js`)
    const indexTemplate = path.resolve(`src/templates/index.js`)
    return graphql(`
        {
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            path
                            title
                            navTitle
                            order
                            toc
                        }
                    }
                }
            }
        }
    `).then(res => {
        if(res.errors){
            return Promise.reject(res.errors)
        }
        res.data.allMarkdownRemark.edges.forEach(({node}) => {
            createPage({
                path: node.frontmatter.path,
                component: node.frontmatter.path === '/' ? indexTemplate : pageTemplate,
                context: {} //additional data can be passed here
            })
        })
    })
}