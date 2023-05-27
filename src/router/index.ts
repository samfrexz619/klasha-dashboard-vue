import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        layout: 'dashboard'
      }
    },
    {
      path: '/balances',
      name: 'balances',
      component: () => import('../views/AllViews.vue'),
      meta: {
        layout: 'dashboard'
      }
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: () => import('../views/TranscView.vue'),
      meta: {
        layout: 'dashboard'
      }
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: () => import('../views/AllViews.vue'),
      meta: {
        layout: 'dashboard'
      }
    },
    {
      path: '/marketing',
      name: 'marketing',
      component: () => import('../views/AllViews.vue'),
      meta: {
        layout: 'dashboard'
      }
    },
    {
      path: '/exchange-rate',
      name: 'exchange-rate',
      component: () => import('../views/AllViews.vue'),
      meta: {
        layout: 'dashboard'
      }
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/AllViews.vue'),
      meta: {
        layout: 'dashboard'
      }
    },
    {
      path: '/payment-link',
      name: 'payment-link',
      component: () => import('../views/AllViews.vue'),
      meta: {
        layout: 'dashboard'
      }
    },
    {
      path: '/wire',
      name: 'wire',
      component: () => import('../views/AllViews.vue'),
      meta: {
        layout: 'dashboard'
      }
    },
    {
      path: '/demo',
      name: 'demo',
      // route level code-splitting
      // this generates a separate chunk (DemoView.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DemoView.vue'),
      meta: {
        layout: 'empty'
      }
    },
  ]
})

export default router