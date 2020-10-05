// exports.createPages = async function({actions, graphql}) {
//     const {data} = await graphql `
//         query {
//             allMdx(sort: {fields: frontmatter___date, order: DESC}) {
//                 edges {
//                 node {
//                     frontmatter {
//                     slug
//                     }
//                     id
//                 }
//                 }
//             }
//         }
//     `

//     // create paginated pages for posts #1

//     const postPerPage = 3
//     const numPages = Math.ceil(data.allMdx.edges.length / postPerPage)

//     Array.from({ length: numPages }).forEach((_, index) => {
//         actions.createPages({
//             path: index == 0 ? `/` : `/${index + 1}`,
//             component: require.resolve("./src/templates/allPosts.js"),
//             context: {
//                 limit: postPerPage,
//                 skip: index * postPerPage,
//                 numPages,
//                 currentPage: index + 1,
//             }
//         })
//     })

//     // create single blog posts
//     data.allMdx.edges.forEach(edge => {
//         const slug = edge.node.frontmatter.slug
//         const id = edge.node.id
//         actions.createPages({
//             path: slug,
//             component: require.resolve(`./src/templates/singlePost.js`),
//             context: {id},
//         })
//     })
// }

/*
#1 
The first two lines are self explanatory.  We then create an array of objects by 
assigning the numPages to the value length.  The _ is to ignore the callback. Now
we can use the createPages via actions. For the path, if the first value is 0,
then just use the root or firt page. If it's more, add one to the index and create
a second page. Limit tells graphql to only include three items per page. Skip is telling
graphql to skip to the next page if index 0 is already made. When index 1 rolls by, graphql
knows then that posts 1, 2, and 3 are already done, so make another page a post items 4, 5, and 6. 

*/