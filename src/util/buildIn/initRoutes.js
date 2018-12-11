// const routes = Route
import routes from './route'
function deep (routes) {
  routes.forEach(item => {
    item.component = () => import(`../../pages` + item.path)
    // console.log(item.children.length)
    if (item.children.length > 0) {
      deep(item.children)
    }
  })
}
deep(routes)
export default routes
