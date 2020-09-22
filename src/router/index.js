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
  // 课程详情
  {
    path: '/index/courseDetail',
    name: 'CourseDetail',
    component: () => import('@/views/home/detail/courseDetail'),
    meta: {
      title: '课程详情',
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
  // 课堂点评列表
  {
    path: '/index/courseAppraise',
    name: 'CourseAppraise',
    component: () => import('@/views/home/modules/courseAppraise'),
    meta: {
      title: '课堂点评',
      keepAlive: true
    }
  },
  // 课堂点评详情
  {
    path: '/courseAppraise/detail',
    name: 'ApprDetail',
    component: () => import('@/views/home/detail/apprDetail'),
    meta: {
      title: '点评详情',
      keepAlive: true
    }
  },
// 请假申请列表
  {
    path: '/index/leaveList',
    name: 'LeaveList',
    component: () => import('@/views/home/modules/leaveList'),
    meta: {
      title: '请假列表',
      keepAlive: true
    }
  },
  // 请假申请
  {
    path: '/LeaveList/leave',
    name: 'Leave',
    component: () => import('@/views/home/detail/leave'),
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
  // 写作业
  {
    path: '/workList/detail',
    name: 'WorkDetail',
    component: () => import('@/views/home/detail/workDetail'),
    meta: {
      title: '写作业',
      keepAlive: true
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
  // 交易记录详情
  {
    path: '/balance/detail',
    name: 'BalanceDetail',
    component: () => import('@/views/user/detail/balanceDetail'),
    meta: {
      title: '记录详情',
      //keepAlive: true
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
  // 消息详情
  {
    path: '/info/detail',
    name: 'Detail',
    component: () => import('@/views/info/detail/infoDetail'),
    meta: {
      title: '消息详情',
      keepAlive: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
