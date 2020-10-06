import React from 'react'
import {Helmet} from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'

export const Seo =({description, keywords, title, image}) => {
    return (
        <StaticQuery
            query={detailsQuery}
            render={data => {
                const metaDescription = description || data.site.siteMetadata.description
                const metaTitle = title || data.site.siteMetadata.description.title 
                const metaImage = image || data.site.siteMetadata.description.image
                const metaKeywords = keywords || ["blog", "web development", "react", "javascript"]

                return (
                    <Helmet
                        title={title}
                        meta={[
                            {
                                name: `description`,
                                content: metaDescription
                            },
                            {
                                property: `og:title`,
                                content: metaTitle,
                            },
                            {
                                property: `og:description`,
                                content: metaDescription
                            },
                            {
                                property: `og:type`,
                                content: `website`,
                            },
                            {
                                property: `og:image`,
                                content: metaImage,
                            },
                            {
                                name: `twitter:card`,
                                content:  `summary_large_item`
                            },
                            {
                                name:  `twitter:title`,
                                content: metaTitle
                            },
                            {
                                name: `twitter:description`,
                                content: metaDescription,
                            },
                            {
                                name: `twitter:image`,
                                content: metaImage,
                            },
                        ].concat(
                            metaKeywords && metaKeywords.length > 0 ? {
                            name: `keywords`,
                            content: metaKeywords.join(`, `),
                            } : []
                        )
                    }
                    />
                )
            }}
        />
    )
}

const detailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title
                description
                image
            }
        }
    }
`