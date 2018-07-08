const path = require(`path`)

exports.createPages = ({boundActionCreators, graphql}) => {
    const {createPage} = boundActionCreators
    const indexTemplate = path.resolve(`src/templates/index.js`)
    const pageTemplate = path.resolve(`src/templates/pageTemplate.js`)
    const pictureGridTemplate = path.resolve(`src/templates/picturesTemplate.js`)
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
                            template
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
            let template
            switch (node.frontmatter.template) {
                case "indexTemplate":
                    template = indexTemplate
                    break
                case "pictureGridTemplate":
                    template = pictureGridTemplate
                    break
                default:
                    template = pageTemplate
                    break
            }
            createPage({
                path: node.frontmatter.path,
                component: template,//node.frontmatter.template === '/' ? indexTemplate : pageTemplate,
                context: {} //additional data can be passed here
            })
        })
    })
}