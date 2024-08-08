import { createRouter, createWebHistory } from "vue-router";
import { loadLayoutMiddleware } from "./middleware/loadLayoutMiddleware";
import index from "../pages/index";
import adminDashboard from "../pages/admin/dashboard";
import adminClasses from "../pages/admin/classes";
import adminSkills from "../pages/admin/skills";
import crypton from "../pages/crypton/index";
import cryptonTradingBots from "../pages/crypton/tradingBots";
import developer from "../pages/developer/index";
import uiKit from "../pages/uiKit";

const routes = [
  {
    name: "welcome",
    path: "/",
    component: index,
    meta: {
      layout: "default",
    },
  },
  {
    name: "admin",
    path: "/admin",
    component: adminDashboard,
    meta: {
      layout: "admin",
    },
  },
  {
    name: "admin-classes",
    path: "/admin/classes",
    component: adminClasses,
    meta: {
      layout: "admin",
    },
  },
  {
    name: "admin-skills",
    path: "/admin/skills",
    component: adminSkills,
    meta: {
      layout: "admin",
    },
  },
  {
    name: "crypton",
    path: "/crypton",
    component: crypton,
    meta: {
      layout: "default",
    },
  },
  {
    name: "crypton-trading-bots",
    path: "/crypton/trading-bots",
    component: cryptonTradingBots,
    meta: {
      layout: "default",
    },
  },
  {
    name: "developer",
    path: "/developer",
    component: developer,
    meta: {
      layout: "default",
    },
  },
  {
    name: "ui-kit",
    path: "/ui-kit",
    component: uiKit,
    meta: {
      layout: "default",
    },
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach(loadLayoutMiddleware);

export default router;
