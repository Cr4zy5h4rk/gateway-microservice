import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    title: 'gatewayApp.adminAuthority.home.title',
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'product',
    title: 'gatewayApp.catalogProduct.home.title',
    loadChildren: () => import('./catalog/product/product.routes'),
  },
  {
    path: 'category',
    title: 'gatewayApp.catalogCategory.home.title',
    loadChildren: () => import('./catalog/category/category.routes'),
  },
  {
    path: 'customer',
    title: 'gatewayApp.customerCustomer.home.title',
    loadChildren: () => import('./customer/customer/customer.routes'),
  },
  {
    path: 'address',
    title: 'gatewayApp.customerAddress.home.title',
    loadChildren: () => import('./customer/address/address.routes'),
  },
  {
    path: 'order',
    title: 'gatewayApp.orderOrder.home.title',
    loadChildren: () => import('./order/order/order.routes'),
  },
  {
    path: 'order-item',
    title: 'gatewayApp.orderOrderItem.home.title',
    loadChildren: () => import('./order/order-item/order-item.routes'),
  },
  // jhipster-needle-add-entity-route - JHipster will add entity modules routes here
];

export default routes;
