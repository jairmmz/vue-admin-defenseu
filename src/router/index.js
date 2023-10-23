import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../pages/Dashboard.vue";
import Analytics from "../pages/Analytics.vue";
import Fintech from "../pages/Fintech.vue";
import Customers from "../pages/ecommerce/Customers.vue";
import Orders from "../pages/ecommerce/Orders.vue";
import Invoices from "../pages/ecommerce/Invoices.vue";
import Shop from "../pages/ecommerce/Shop.vue";
import Shop2 from "../pages/ecommerce/Shop2.vue";
import Product from "../pages/ecommerce/Product.vue";
import Cart from "../pages/ecommerce/Cart.vue";
import Cart2 from "../pages/ecommerce/Cart2.vue";
import Cart3 from "../pages/ecommerce/Cart3.vue";
import Pay from "../pages/ecommerce/Pay.vue";
import Transactions from "../pages/finance/Transactions.vue";
import TransactionDetails from "../pages/finance/TransactionDetails.vue";
import Account from "../pages/settings/Account.vue";
import Notifications from "../pages/settings/Notifications.vue";
import Apps from "../pages/settings/Apps.vue";
import Plans from "../pages/settings/Plans.vue";
import Billing from "../pages/settings/Billing.vue";
import Feedback from "../pages/settings/Feedback.vue";
import EmptyState from "../pages/utility/EmptyState.vue";
import PageNotFound from "../pages/utility/PageNotFound.vue";
import Signin from "../pages/Signin.vue";
import Signup from "../pages/Signup.vue";
import ResetPassword from "../pages/ResetPassword.vue";
import ButtonPage from "../pages/component/ButtonPage.vue";
import FormPage from "../pages/component/FormPage.vue";
import DropdownPage from "../pages/component/DropdownPage.vue";
import AlertPage from "../pages/component/AlertPage.vue";
import ModalPage from "../pages/component/ModalPage.vue";
import PaginationPage from "../pages/component/PaginationPage.vue";
import TabsPage from "../pages/component/TabsPage.vue";
import BreadcrumbPage from "../pages/component/BreadcrumbPage.vue";
import BadgePage from "../pages/component/BadgePage.vue";
import AvatarPage from "../pages/component/AvatarPage.vue";
import TooltipPage from "../pages/component/TooltipPage.vue";
import AccordionPage from "../pages/component/AccordionPage.vue";
import IconsPage from "../pages/component/IconsPage.vue";

const routes = [
  {
    path: "/",
    component: Dashboard,
  },
  {
    path: "/dashboard/analytics",
    component: Analytics,
  },
  {
    path: "/dashboard/fintech",
    component: Fintech,
  },
  {
    path: "/ecommerce/customers",
    component: Customers,
  },
  {
    path: "/ecommerce/orders",
    component: Orders,
  },
  {
    path: "/ecommerce/invoices",
    component: Invoices,
  },
  {
    path: "/ecommerce/shop",
    component: Shop,
  },
  {
    path: "/ecommerce/shop-2",
    component: Shop2,
  },
  {
    path: "/ecommerce/product",
    component: Product,
  },
  {
    path: "/ecommerce/cart",
    component: Cart,
  },
  {
    path: "/ecommerce/cart-2",
    component: Cart2,
  },
  {
    path: "/ecommerce/cart-3",
    component: Cart3,
  },
  {
    path: "/ecommerce/pay",
    component: Pay,
  },
  {
    path: "/finance/transactions",
    component: Transactions,
  },
  {
    path: "/finance/transaction-details",
    component: TransactionDetails,
  },
  {
    path: "/settings/account",
    component: Account,
  },
  {
    path: "/settings/notifications",
    component: Notifications,
  },
  {
    path: "/settings/apps",
    component: Apps,
  },
  {
    path: "/settings/plans",
    component: Plans,
  },
  {
    path: "/settings/billing",
    component: Billing,
  },
  {
    path: "/settings/feedback",
    component: Feedback,
  },
  {
    path: "/utility/empty-state",
    component: EmptyState,
  },
  {
    path: "/utility/404",
    component: PageNotFound,
  },
  {
    path: "/signin",
    component: Signin,
  },
  {
    path: "/signup",
    component: Signup,
  },
  {
    path: "/reset-password",
    component: ResetPassword,
  },
  {
    path: "/component/button",
    component: ButtonPage,
  },
  {
    path: "/component/form",
    component: FormPage,
  },
  {
    path: "/component/dropdown",
    component: DropdownPage,
  },
  {
    path: "/component/alert",
    component: AlertPage,
  },
  {
    path: "/component/modal",
    component: ModalPage,
  },
  {
    path: "/component/pagination",
    component: PaginationPage,
  },
  {
    path: "/component/tabs",
    component: TabsPage,
  },
  {
    path: "/component/breadcrumb",
    component: BreadcrumbPage,
  },
  {
    path: "/component/badge",
    component: BadgePage,
  },
  {
    path: "/component/avatar",
    component: AvatarPage,
  },
  {
    path: "/component/tooltip",
    component: TooltipPage,
  },
  {
    path: "/component/accordion",
    component: AccordionPage,
  },
  {
    path: "/component/icons",
    component: IconsPage,
  },
  {
    path: "/:pathMatch(.*)*",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;