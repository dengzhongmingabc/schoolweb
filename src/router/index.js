import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 首页
  {
    path: '*',
    name: 'Home',
    // 路由懒加载：https://router.vuejs.org/zh/guide/advanced/lazy-loading.html
    // webpackPreload：https://www.jianshu.com/p/bbdcfeee7fbc
    component: () => import(/* webpackPreload: true */ '@/views/home'),
    meta: {
      title: '首页',
      showTab: true,
      keepAlive: true
    }
  },
  // 课程表
  {
    path: '/index/courseList',
    name: 'CourseList',
    component: () => import('@/views/home/modules/courseList'),
    meta: {
      title: '课程表',
      keepAlive: true
    }
  },
  // 课堂点评
  {
    path: '/index/courseAppraise',
    name: 'CourseAppraise',
    component: () => import('@/views/home/modules/courseAppraise'),
    meta: {
      title: '课堂点评',
      keepAlive: true
    }
  },
// 请假申请
  {
    path: '/index/leaveList',
    name: 'LeaveList',
    component: () => import('@/views/home/modules/leaveList'),
    meta: {
      title: '请假申请',
      keepAlive: true
    }
  },
  // 作业列表
  {
    path: '/index/workList',
    name: 'WorkList',
    component: () => import('@/views/home/modules/workList'),
    meta: {
      title: '作业列表',
      //keepAlive: true
    }
  },
  // 交易记录
  {
    path: '/user/balanceList',
    name: 'BalanceList',
    component: () => import('@/views/user/modules/balanceList'),
    meta: {
      title: '交易记录',
      //keepAlive: true
    }
  },
  // 登录
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/login'),
    meta: {
      title: '登录'
    }
  },
  // 分类
  {
    path: '/category',
    name: 'Category',
    component: () => import('@/views/category'),
    meta: {
      title: '分类',
      showTab: true,
      keepAlive: true
    }
  },
  // 购物车
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/cart'),
    meta: {
      title: '购物车',
      showTab: true
    }
  },
  // 我的
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/user'),
    meta: {
      title: '我的',
      showTab: true
    }
  },
  // 报读课程
  {
    path: '/user/courseSubList',
    name: 'CourseSubList',
    component: () => import('@/views/user/modules/courseSubList'),
    meta: {
      title: '报读课程',
      keepAlive: true
    }
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('@/views/info'),
    meta: {
      title: '消息',
      showTab: true
    }
  },
  // 商品列表
  {
    path: '/product',
    name: 'Product',
    component: () => import('@/views/product'),
    meta: {
      title: '商品列表',
      keepAlive: true
    }
  },
  // 商品详情
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/detail'),
    meta: {
      title: '商品详情',
      keepAlive: true
    }
  },
  // 地址管理
  {
    path: '/address',
    name: 'Address',
    component: () => import('@/views/address/list'),
    meta: {
      title: '地址管理'
    }
  },
  // 地址编辑
  {
    path: '/address/edit',
    name: 'AddressEdit',
    component: () => import('@/views/address/edit'),
    meta: {
      title: '地址编辑'
    }
  },
  // 搜索
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/search'),
    meta: {
      title: '搜索'
    }
  },
  // 搜索结果
  {
    path: '/search/list',
    name: 'SearchList',
    component: () => import('@/views/search/list'),
    meta: {
      title: '搜索结果'
    }
  },
  // 确认订单
  {
    path: '/order/confirm',
    name: 'OrderConfirm',
    component: () => import('@/views/order/confirm'),
    meta: {
      title: '确认订单',
      keepAlive: true
    }
  },
  // 订单列表
  {
    path: '/order/list',
    name: 'OrderList',
    component: () => import('@/views/order/list'),
    meta: {
      title: '订单列表'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
