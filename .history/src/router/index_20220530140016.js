import { createRouter, createWebHistory } from "vue-router";
import { projectAuth } from "@/configs/firebase";

// auth guard
const requireAuth = (to, from, next) => {
  const user = projectAuth.currentUser;

  // ckeck neu chua dang nhap se chuyen ve trang dang nhap
  if (!user) next({ name: "Login", params: {} });
  else next();
};

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      text: "Trang chủ",
      leading: false,
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/index.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login.vue"),
  },
  {
    path: "/logout",
    name: "Logout",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "logout" */ "../views/logout.vue"),
  },
  {
    path: "/new-transaction",
    name: "NewTransaction",
    meta: {
      text: "Giao dịch mới",
      leading: false,
      isShowFooter: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "new-transaction" */ "../views/new-transaction.vue"
      ),
  },
  // home
  {
    path: "/total-transaction",
    name: "TotalTransaction",
    meta: {
      text: "Tổng chi tiêu",
      leading: false,
    },
    component: () =>
      import(
        /* webpackChunkName: "total-transaction" */ "../views/total-transaction.vue"
      ),
  },
  {
    path: "/transactions",
    name: "Transactions",
    meta: {
      text: "Các giao dịch",
      leading: false,
    },
    component: () =>
      import(
        /* webpackChunkName: "transactions" */ "../views/transactions.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
