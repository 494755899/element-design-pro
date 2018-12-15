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

routes.unshift(
  {
    path: '/redirect/:path*',
    component: () => import('@/components/layout/elementDesignRedirectPath.vue')
  }
)
console.log(routes)
export default routes
