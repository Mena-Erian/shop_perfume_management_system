import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { PosLayoutComponent } from './layout/pos-layout/pos-layout.component';
import { BackofficeLayoutComponent } from './layout/backoffice-layout/backoffice-layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'pos', pathMatch: 'full' },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      {
        path: 'signin',
        loadComponent: () =>
          import('./core/auth/signin/signin.component').then(
            (c) => c.SigninComponent
          ),
        title: 'Perfumes | Sign In',
      },
      {
        path: 'signout',
        loadComponent: () =>
          import('./core/auth/signout/signout.component').then(
            (c) => c.SignoutComponent
          ),
        title: 'Perfumes | Sign Out',
      },
      {
        path: 'forget-password',
        loadComponent: () =>
          import('./core/auth/forget-password/forget-password.component').then(
            (c) => c.ForgetPasswordComponent
          ),
        title: 'Perfumes | Forget Password',
      },
    ],
  },
  {
    path: 'backoffice',
    component: BackofficeLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./backoffice/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
        title: 'Perfumes | Dashboard',
      },
      {
        path: 'raw-materials',
        loadComponent: () =>
          import('./backoffice/raw-materials/raw-materials.component').then(
            (c) => c.RawMaterialsComponent
          ),
        title: 'Perfumes | Raw Materials',
      },
      {
        path: 'cashier',
        loadComponent: () =>
          import('./backoffice/cashier/cashier.component').then(
            (c) => c.CashierComponent
          ),
        title: 'Perfumes | Cashier',
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./backoffice/products/products.component').then(
            (c) => c.ProductsComponent
          ),
        title: 'Perfumes | Products',
      },
      {
        path: 'bottles',
        loadComponent: () =>
          import('./backoffice/bottles/bottles.component').then(
            (c) => c.BottlesComponent
          ),
        title: 'Perfumes | Bottles',
      },
      {
        path: 'employees',
        loadComponent: () =>
          import('./backoffice/employees/employees.component').then(
            (c) => c.EmployeesComponent
          ),
        title: 'Perfumes | Employees',
      },
      {
        path: 'reports',
        loadComponent: () =>
          import('./backoffice/reports/reports.component').then(
            (c) => c.ReportsComponent
          ),
        title: 'Perfumes | Reports',
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./backoffice/settings/settings.component').then(
            (c) => c.SettingsComponent
          ),
        title: 'Perfumes | Settings',
      },
    ],
  },
  {
    path: 'pos',
    component: PosLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('./pos/home/home.component').then((c) => c.HomeComponent),
        title: 'Perfumes | Home',
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./pos/cart/cart.component').then((c) => c.CartComponent),
        title: 'Perfumes | Cart',
      },
      {
        path: 'make-your-perfume',
        loadComponent: () =>
          import('./pos/make-your-perfume/make-your-perfume.component').then(
            (c) => c.MakeYourPerfumeComponent
          ),
        title: 'Perfumes | Make your Perfume',
      },
      {
        path: 'product-details',
        loadComponent: () =>
          import('./pos/product-details/product-details.component').then(
            (c) => c.ProductDetailsComponent
          ),
        title: 'Perfumes | Details',
      },
      {
        path: 'user-profile',
        loadComponent: () =>
          import('./pos/user-profile/user-profile.component').then(
            (c) => c.UserProfileComponent
          ),
        title: 'Perfumes | Profile',
      },
      {
        path: 'checkout',
        loadComponent: () =>
          import('./pos/checkout/checkout.component').then(
            (c) => c.CheckoutComponent
          ),
        title: 'Perfumes | Checkout',
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./shared/components/not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
    title: 'Perfumes | Not Found',
  },
];
