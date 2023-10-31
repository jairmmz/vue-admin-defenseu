import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '../store/user';

import AppLayout from '../layouts/AppLayout.vue';
import Dashboard from '../pages/Dashboard.vue';
import Analytics from '../pages/Analytics.vue';
import Fintech from '../pages/Fintech.vue';

import Documents from '../pages/documents/Documents.vue';
import DocumentsCreate from '../pages/documents/DocumentsCreate.vue';
import DocumentsEdit from '../pages/documents/DocumentsEdit.vue';

import Notices from '../pages/notices/Notices.vue';
import NoticesCreate from '../pages/notices/NoticesCreate.vue';
import NoticesEdit from '../pages/notices/NoticesEdit.vue';

import Customers from '../pages/ecommerce/Customers.vue';
import Orders from '../pages/ecommerce/Orders.vue';
import Invoices from '../pages/ecommerce/Invoices.vue';
import Shop from '../pages/ecommerce/Shop.vue';
import Shop2 from '../pages/ecommerce/Shop2.vue';
import Product from '../pages/ecommerce/Product.vue';
import Cart from '../pages/ecommerce/Cart.vue';
import Cart2 from '../pages/ecommerce/Cart2.vue';
import Cart3 from '../pages/ecommerce/Cart3.vue';
import Pay from '../pages/ecommerce/Pay.vue';
import Transactions from '../pages/finance/Transactions.vue';
import TransactionDetails from '../pages/finance/TransactionDetails.vue';
import Account from '../pages/settings/Account.vue';
import Notifications from '../pages/settings/Notifications.vue';
import Apps from '../pages/settings/Apps.vue';
import Plans from '../pages/settings/Plans.vue';
import Billing from '../pages/settings/Billing.vue';
import Feedback from '../pages/settings/Feedback.vue';
import EmptyState from '../pages/utility/EmptyState.vue';
import PageNotFound from '../pages/utility/PageNotFound.vue';
import Signin from '../pages/Signin.vue';
import Signup from '../pages/Signup.vue';
import ResetPassword from '../pages/ResetPassword.vue';
import ButtonPage from '../pages/component/ButtonPage.vue';
import FormPage from '../pages/component/FormPage.vue';
import DropdownPage from '../pages/component/DropdownPage.vue';
import AlertPage from '../pages/component/AlertPage.vue';
import ModalPage from '../pages/component/ModalPage.vue';
import PaginationPage from '../pages/component/PaginationPage.vue';
import TabsPage from '../pages/component/TabsPage.vue';
import BreadcrumbPage from '../pages/component/BreadcrumbPage.vue';
import BadgePage from '../pages/component/BadgePage.vue';
import AvatarPage from '../pages/component/AvatarPage.vue';
import TooltipPage from '../pages/component/TooltipPage.vue';
import AccordionPage from '../pages/component/AccordionPage.vue';
import IconsPage from '../pages/component/IconsPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    component: AppLayout,
    meta: { requiresAuth: true },
    children: [
      { path: '/dashboard', name: 'app.dashboard',component: Dashboard },
      { path: '/dashboard/analytics', name: 'app.analitycs', component: Analytics },
      { path: '/dashboard/fintech', name: 'app.fintech', component: Fintech },
      
      { path: '/documents', name: 'app.documents', component: Documents },
      { path: '/documents/create', name: 'app.documents.create', component: DocumentsCreate },
      { path: '/documents/edit/:id', name: 'app.documents.edit', component: DocumentsEdit },

      { path: '/notices', name: 'app.notices', component: Notices },
      { path: '/notices/create', name: 'app.notices.create', component: NoticesCreate },
      { path: '/notices/edit/:id', name: 'app.notices.edit', component: NoticesEdit },

      { path: '/ecommerce/customers', name: 'app.customers', component: Customers },
      { path: '/ecommerce/orders', name: 'app.orders', component: Orders },
      { path: '/ecommerce/invoices', name: 'app.invoices', component: Invoices },
      { path: '/ecommerce/shop', name: 'app.shop', component: Shop },
      { path: '/ecommerce/shop-2', name: 'app.shop2', component: Shop2 },
      { path: '/ecommerce/product', name: 'app.product', component: Product },
      { path: '/ecommerce/cart', name: 'app.cart', component: Cart },
      { path: '/ecommerce/cart-2', name: 'app.cartTwo', component: Cart2 },
      { path: '/ecommerce/cart-3', name: 'app.cartThree', component: Cart3 },
      { path: '/ecommerce/pay', name: 'app.pay', component: Pay },
      { path: '/finance/transactions', name: 'app.transactions', component: Transactions },
      { path: '/finance/transaction-details', name: 'app.transactionDetails', component: TransactionDetails },
      { path: '/settings/account', name: 'app.account', component: Account },
      { path: '/settings/notifications', name: 'app.notifications', component: Notifications },
      { path: '/settings/apps', name: 'app.apps', component: Apps },
      { path: '/settings/plans', name: 'app.plans', component: Plans },
      { path: '/settings/billing', name: 'app.billing', component: Billing },
      { path: '/settings/feedback', name: 'app.feedback', component: Feedback },
      { path: '/utility/empty-state', name: 'app.emptyState', component: EmptyState },
      { path: '/component/button', name: 'app.button', component: ButtonPage },
      { path: '/component/form', name: 'app.form', component: FormPage },
      { path: '/component/dropdown', name: 'app.dropdown', component: DropdownPage },
      { path: '/component/alert', name: 'app.alert', component: AlertPage },
      { path: '/component/modal', name: 'app.modal', component: ModalPage },
      { path: '/component/pagination', name: 'app.pagination', component: PaginationPage },
      { path: '/component/tabs', name: 'app.tabs', component: TabsPage },
      { path: '/component/breadcrumb', name: 'app.breadcrumb', component: BreadcrumbPage },
      { path: '/component/badge', name: 'app.badge', component: BadgePage },
      { path: '/component/avatar', name: 'app.avatar', component: AvatarPage },
      { path: '/component/tooltip', name: 'app.tooltip', component: TooltipPage },
      { path: '/component/accordion', name: 'app.accordion', component: AccordionPage },
      { path: '/component/icons', name: 'app.icons', component: IconsPage },
    ],
  },
  
  { path: '/:pathMatch(.*)*', name: 'pageNotFound', component: PageNotFound },
  { path: '/signin', name: 'signin', component: Signin, meta: { requiresGuest: true } },
  { path: '/signup', name: 'signup', component: Signup, meta: { requiresGuest: true } },
  { path: '/reset-password', name: 'resetPassword', component: ResetPassword, meta: { requiresGuest: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const store = useUserStore();

  if (to.meta.requiresAuth && !store.$state.user.token) {
    next({ name: 'signin' });
  } else if (to.meta.requiresGuest && store.$state.user.token) {
    next({ name: 'app.dashboard' });
  } else {
    next();
  }
});

export default router;
