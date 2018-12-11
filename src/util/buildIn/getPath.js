/* eslint-disable */
export default function getPath (id, catalog) {
  var path = []
  var flag = false
  try {
    function getNodePath(node) {
      path.push(node)
      if(node.path == id) {
        flag = true
        throw('got it')
      }
      var child = node.children || []
      if (child.length > 0) {
        for(let i = 0; i < child.length; i++) {
          getNodePath(child[i])
        }
        path.pop()
      } else {
        path.pop()
      }
    }
    for(let i=0; i<catalog.length; i++) {
      if (flag) break
      getNodePath(catalog[i])
    }
  } catch (error) {}
  return path
}
