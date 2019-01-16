const fs = require('fs')
const path = require('path')
const join = require('path').join
const targetPath = path.resolve(__dirname, '../src/pages')
const sourcePath = path.resolve(__dirname, '../src/util/buildIn/route.js')
function initRoute () {
  function findSync (startPath) {
    function finder (path, root, rootName) {
      let files = fs.readdirSync(path)
      return files.reduce((back, val) => {
        let fPath = join(path, val)
        let stats = fs.statSync(fPath)
        if (stats.isDirectory()) {
          const path = root + val
          const name = rootName + (rootName ? '-' : '') + val
          back.push({
            path,
            name,
            children: finder(fPath, path + '/', name)
          })
        }
        return back
      }, [])
    }
    return finder(startPath, '/', '')
  }
  let result = findSync(targetPath)
  result = `export default ${JSON.stringify(result)}`
  fs.writeFileSync(sourcePath, result)
}

initRoute()
fs.watch(targetPath, () => {
  initRoute()
})
