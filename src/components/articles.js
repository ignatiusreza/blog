import { Link } from 'gatsby'

import ArticleDate from './date'

const Articles = ({ articles }) => (
  <div>
    {articles.map(article => (
      <div key={article.id} className="article">
        <div className="article-date">
          <ArticleDate date={article.fields.date} />
        </div>

        <div>
          <Link to={article.fields.path} className="article-title">
            <h2>{article.frontmatter.title}</h2>
          </Link>

          <p className="article-excerpt">{article.frontmatter.description}</p>
        </div>
      </div>
    ))}
  </div>
)

export default Articles
