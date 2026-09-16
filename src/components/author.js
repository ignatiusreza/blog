import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Author = () => (
  <div className="flex items-start md:items-center mb-12">
    <StaticImage
      src="../images/avatar.jpg"
      alt="Ignatius Reza"
      width={64}
      height={64}
      layout="constrained"
      placeholder="blurred"
      className="w-10 md:w-16 mt-1 md:mt-0 flex-none rounded-full"
    />
    <div className="ml-5">
      <div>
        <div className="font-bold text-xl sm:inline">Ignatius Reza</div>
        <span className="hidden sm:inline"> - </span>
        <Link to="/now">See what I&apos;m doing right now</Link>
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
              href="https://id.linkedin.com/in/ignatiusreza"
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

export default Author
