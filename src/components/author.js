import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Author = () => {
  const { avatar } = useStaticQuery(
    graphql`
      query {
        avatar: file(relativePath: { eq: "avatar.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 64, maxHeight: 64) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <div className="flex items-start md:items-center mb-12">
      <Img
        fluid={avatar.childImageSharp.fluid}
        className="w-10 md:w-16 mt-1 md:mt-0 flex-none rounded-full"
      />
      <div className="ml-5">
        <div>
          <div className="font-bold text-xl sm:inline">Ignatius Reza</div>
          <span className="hidden sm:inline"> - </span>
          <Link to="/now">See what I'm doing right now</Link>
        </div>
        <p className="whitespace-pre-wrap">
          This is my personal blog/playground.
        </p>

        <div>
          Find me:
          <ul className="inline">
            <li className="inline ml-2">
              <a
                href="https://github.com/ignatiusreza"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li className="inline ml-2">
              <a
                href="https://www.facebook.com/ignatius.reza"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className="inline ml-2">
              <a
                href="http://id.linkedin.com/in/ignatiusreza"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Author
