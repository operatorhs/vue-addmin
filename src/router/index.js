import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout/layout'

Vue.use(Router)
const rou = [
  {
    path: '/',
    name: 'layout',
    meta: {
      nav: false
    },
    component: Layout
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      nav: false
    },
    component: () => import('@/views/login/login')
  },
  {
    path: '/company',
    component: Layout,
    redirect: '/company/company',
    meta: {
      nav: true,
      title: '公司简介',
      role: 0
    },
    children: [
      {
        path: 'company',
        component: () => import('@/views/company/company')
      }
    ]
  },
  {
    path: '/brand',
    name: 'brand',
    component: Layout,
    redirect: '/brand/brand',
    meta: {
      nav: true,
      title: '注册商标',
      role: 1
    },
    children: [
      {
        path: 'brand',
        component: () => import('@/views/brand-register/brand-register')
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    component: Layout,
    redirect: '/user/user',
    meta: {
      nav: true,
      title: '用户管理',
      role: 1
    },
    children: [
      {
        path: 'user',
        component: () => import('@/views/user/user')
      }
    ]
  },
  {
    path: '/material',
    name: 'material',
    component: Layout,
    redirect: '/material/category',
    meta: {
      nav: true,
      title: '素材管理',
      role: 2
    },
    children: [
      {
        meta: {
          title: '素材分类'
        },
        path: 'category',
        component: () => import('@/views/material/category-material')
      },
      {
        path: 'census',
        redirect: 'census/add',
        component: () => import('@/views/material/material'),
        meta: {
          title: '素材修改'
        },
        children: [
          {
            path: 'add',
            component: () => import('@/views/material/add-material'),
            meta: {
              title: '素材管理'
            }
          },
          {
            path: 'edit',
            component: () => import('@/views/material/edit-material'),
            meta: {
              title: '素材编辑'
            }
          }
        ]
      }
    ]
  },
  { path: '*',
    meta: {
      nav: false
    },
    component: () => import('@/views/404/404')
  },
  { path: '/404',
    meta: {
      nav: false
    },
    component: () => import('@/views/404/404')
  }
]
const router = new Router({
  routes: rou
})
router.rou = rou
export default router
