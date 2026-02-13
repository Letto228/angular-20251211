import {Routes} from '@angular/router';
import {NotFound} from './pages/not-found/not-found';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/products-list',
        pathMatch: 'full',
    },
    {
        path: 'products-list',
        loadComponent: () =>
            import('./pages/products-list/products-list').then(m => m.ProductsList),
    },
    {
        path: 'product/:id',
        loadComponent: () => import('./pages/product/product').then(m => m.Product),
        loadChildren: () => import('./pages/product/product.routes').then(m => m.productRoutes),
    },
    {
        path: '**',
        component: NotFound,
    },
];
