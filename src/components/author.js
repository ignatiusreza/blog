import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
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
        <div className="font-bold text-xl">Ignatius Reza</div>
        <p className="whitespace-pre-wrap">
          This site is my personal blog/playground.
          <br />
          Learn something about everything and everything about something.
        </p>

        <div>
          Find me on:
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
            <li className="inline ml-3">
              <a
                href="https://www.facebook.com/ignatius.reza"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className="inline ml-3">
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
