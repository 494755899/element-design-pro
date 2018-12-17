// const routes = Route
import routes from './route'
function deep (routes) {
  routes.forEach(item => {
    item.component = () => import(`../../pages` + item.path)
    if (item.children.length > 0) {
      deep(item.children)
    }
  })
}
deep(routes)

routes.unshift(
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/redirect/:path*',
    component: () => import('@/components/layout/elementDesignRedirectPath.vue')
  },
  {
    path: '/404',
    component: () => import('@/components/customer/404.vue')
  },
  {
    path: '/403',
    component: () => import('@/components/customer/403.vue')
  },
  {
    path: '/home',
    component: () => import('@/components/customer/home.vue')
  }
)
routes.push(
  {
    path: '*',
    component: () => import('@/components/customer/404.vue')
  }
)
console.log(routes)
export default routes
