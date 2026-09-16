/**
 * Open links that leave the site in a new tab.
 *
 * Replaces the npm package of the same name, abandoned at 0.0.4 and still
 * pulling in babel-runtime@6. Gatsby resolves plugins/ ahead of node_modules,
 * so the name in gatsby-config.js stays the same.
 */

const EXTERNAL_URL = /^(https?:)?\/\//i

module.exports = (
  { markdownAST },
  { target = '_blank', rel = 'noopener noreferrer' } = {}
) => {
  visit(markdownAST, node => {
    if (node.type !== 'link' || !EXTERNAL_URL.test(node.url)) return

    node.data = { ...node.data }
    node.data.hProperties = { ...node.data.hProperties, target, rel }
  })

  return markdownAST
}

function visit(node, callback) {
  callback(node)

  if (node.children) node.children.forEach(child => visit(child, callback))
}
