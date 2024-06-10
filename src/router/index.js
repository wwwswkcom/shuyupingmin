import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: { title: '首页', icon: 'el-icon-s-tools' },
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
  {
    path: '/system/',
    component: Layout,
    name: "systemManger",
    meta: { title: '交流平台', icon: 'el-icon-s-tools' },
    children: [
      {
        path: 'index',
        name: 'systemindex',
        component: () => import('@/views/noquanxian.vue'),
        meta: { title: '交流信息查询', icon: 'el-icon-monitor' }
      }
    ],
  },
  {
    path: '/shop/',
    component: Layout,
    name: "shopManger",
    meta: { title: '采购订单协同', icon: 'el-icon-s-check' },
    children: [
      {
        path: 'index',
        name: 'shopindex',
        component: () => import('@/views/noquanxian.vue'),
        meta: { title: '未送货订单查询', icon: 'el-icon-user' }
      },
    ],
  },
  {
    path: '/shopping/',
    component: Layout,
    name: "shoppingManger",
    meta: { title: '采购入库', icon: 'el-icon-present' },
    children: [
      {
        path: 'index',
        name: 'shoppingindex',
        component: () => import('@/views/noquanxian.vue'),
        meta: { title: '商品入退库查询', icon: 'el-icon-box' }
      },
      {
        path: 'indexname',
        name: 'shoppingindexname',
        component: () => import('@/views/noquanxian.vue'),
        meta: { title: '商品未开票查询', icon: 'el-icon-sold-out' }
      },
    ],
  },
  {
    path: '/shopgo/',
    component: Layout,
    name: "shopgoManger",
    meta: { title: '财务对账', icon: 'el-icon-s-tools' },
    children: [
      {
        path: 'index',
        name: 'shopgoindex',
        component: () => import('@/views/noquanxian.vue'),
        meta: { title: '结算单查询', icon: 'el-icon-user-solid' }
      },
    ],
  },

  {
    path: '/user/',
    component: Layout,
    redirect: '/user/index',
    name: 'memberMange',
    meta: { title: '商品查询', icon: 'el-icon-coin' },
    children: [
      {
        path: 'index',
        name: 'userindex',
        component: () => import('@/views/noquanxian.vue'),
        meta: { title: '商品库存查询', icon: 'table' }
      },
      {
        path: 'pull',
        name: 'userpull',
        component: () => import('@/views/noquanxian.vue'),
        meta: { title: '商品销售查询', icon: 'el-icon-folder' }
      },
      {
        path: 'retail',
        name: 'userretail',
        component: () => import('@/views/user/index.vue'),
        meta: { title: '商品配送查询', icon: 'el-icon-film' }
      }
    ]
  },
  {
    path: '/shoppingPush/',
    component: Layout,
    name: "shoppingPushManger",
    meta: { title: '商品比价', icon: 'el-icon-message-solid' },
    children: [
      {
        path: 'index',
        name: 'shoppingPushindex',
        component: () => import('@/views/noquanxian.vue'),
        meta: { title: '商品比价模块', icon: 'el-icon-message-solid' }
      },
    ],
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
