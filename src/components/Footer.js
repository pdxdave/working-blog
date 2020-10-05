import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {
    FooterWrapper, 
    FooterSocialWrapper, 
    FooterSocialIcons,
} from '../elements'

export const Footer = () => {

    const data = useStaticQuery(graphql `

        query {
            linkedin: file(relativePath: {eq: "linkedin.svg"}) {
                publicURL
            },
            twitter: file(relativePath: {eq: "twitter.svg"}) {
                publicURL
            }
        }

    `)

    return (
        <FooterWrapper>
            <FooterSocialWrapper>
                <FooterSocialIcons>
                    <a 
                        href="https://twitter.com/webdevdave1" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={data.twitter.publicURL} alt="twitter"/>
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/dave-martinson-637b80191/" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={data.linkedin.publicURL} alt="linkedin"/>
                    </a>
                </FooterSocialIcons>
                <p>@ 2020 Blah Blah. All rights reserved</p>
            </FooterSocialWrapper>
        </FooterWrapper>
    )
}