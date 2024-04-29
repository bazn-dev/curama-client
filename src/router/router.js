import Cookies from 'js-cookie'
import VueRouter from 'vue-router'
import HomePageContainer from "@/containers/HomePageContainer";
import LoginPageContainer from "@/containers/LoginPageContainer";
import TicketPageContainer from "@/containers/TicketPageContainer";
import PriceCompareContainer from "@/containers/PriceCompareContainer";
import SettingsPageContainer from "@/containers/SettingsPageContainer";
import UserPageContainer from "@/containers/UserPageContainer";
import CardsPageContainer from "@/containers/CardsPageContainer";
import NotificationsPageContainer from "@/containers/NotificationsPageContainer";
import DRDestinationsPageContainer from "@/containers/DRDestinationsPageContainer";
import DailyLimitsPageContainer from "@/containers/DailyLimitsPageContainer";
import DiagnosticContainer from "@/containers/DiagnosticContainer";
import userApi from "@/api/user";

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomePageContainer,
      redirect: '/tickets',
      meta: {
        auth: true,
        access: ['user', 'manager', 'admin']
      }
    },
    {
      name: 'login',
      path: '/login',
      component: LoginPageContainer,
      meta: {
        auth: false,
        access: ['user', 'manager', 'admin']
      }
    },
    {
      name: 'settings',
      path: '/settings',
      component: SettingsPageContainer,
      meta: {
        auth: true,
        access: ['admin']
      },
    },
    {
      name: 'users',
      path: '/users',
      component: UserPageContainer,
      meta: {
        auth: true,
        access: ['admin']
      },
    },
    {
      name: 'cards',
      path: '/cards',
      component: CardsPageContainer,
      meta: {
        auth: true,
        access: ['admin']
      },
    },
    {
      name: 'notifications',
      path: '/notifications',
      component: NotificationsPageContainer,
      meta: {
        auth: true,
        access: ['manager', 'admin']
      },
    },
    {
      name: 'tickets',
      path: '/tickets',
      component: TicketPageContainer,
      meta: {
        auth: true,
        access: ['user', 'manager', 'admin']
      },
    },
    {
      name: 'ticket',
      path: '/tickets/:id',
      component: PriceCompareContainer,
      meta: {
        auth: true,
        access: ['user', 'manager', 'admin']
      },
    },
    {
      name: 'dr_destinations',
      path: '/dr_destinations',
      component: DRDestinationsPageContainer,
      meta: {
        auth: true,
        access: ['manager', 'admin']
      },
    },
    {
      name: 'drx_destinations',
      path: '/drx_destinations',
      component: DRDestinationsPageContainer,
      meta: {
        auth: true,
        access: ['manager', 'admin']
      },
    },
    {
      name: 'mdr_destinations',
      path: '/mdr_destinations',
      component: DRDestinationsPageContainer,
      meta: {
        auth: true,
        access: ['manager', 'admin']
      },
    },
    {
      name: 'daily_limits',
      path: '/daily_limits',
      component: DailyLimitsPageContainer,
      meta: {
        auth: true,
        access: ['manager', 'admin']
      },
    },
    {
      name: 'diagnostic',
      path: '/diagnostic',
      component: DiagnosticContainer,
      meta: {
        auth: true,
        access: ['admin']
      },
    },
    {
      path: '*',
      redirect: '/',
      meta: {
        auth: true,
        access: ['user', 'manager', 'admin']
      },
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  let token = Cookies.get('userToken')
  if (to.meta.auth && !token) {
    next('/login')
  } else {
    let user = null
    if (token) {
      user = await userApi.profile()
    }
    if (user && !to.meta.access.includes(user.data.data.role)) {
      next('/tickets')
    }
    
    if (to.path === '/login' && token) {
      next({
        path: from.path
      })
    }
    next()
  }
})

export default router
