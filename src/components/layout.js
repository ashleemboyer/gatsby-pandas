import React from "react"
import { Helmet } from "react-helmet"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="Description" content="This is my version of the Gatsby Panda site."></meta>
        <title>A Cool Panda Site</title>
        <link rel="canonical" href="https://ashleemboyer.github.io/gatsby-pandas/" />
      </Helmet>
      <div
        css={css`
          margin: 0 auto;
          max-width: 700px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        <Link to={`/`}>
          <h3
            css={css`
              margin-bottom: ${rhythm(2)};
              display: inline-block;
              font-style: normal;
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <Link
          to={`/about/`}
          css={css`
            float: right;
          `}
        >
          About
        </Link>
        {children}
      </div>
    </div>
  )
}
