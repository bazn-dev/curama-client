import { createRouter, createWebHistory } from 'vue-router'
import index from '../pages/index'
import tradingBots from '../pages/tradingBots'

const routes = [
    {
        name: 'home',
        path: '/',
        component: index
    },
    {
        name: 'trading-bots',
        path: '/trading-bots',
        component: tradingBots
    },
];

export default createRouter({
    routes,
    history: createWebHistory()
})