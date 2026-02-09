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
        // component: ProductsList,
        loadComponent: () =>
            import('./pages/products-list/products-list').then(m => m.ProductsList),
        // pathMatch: 'prefix',
    },
    {
        path: 'product/:id/:name/:id_comment',
        // component: Product,
        loadComponent: () => import('./pages/product/product').then(m => m.Product),
        // pathMatch: 'full',
        // pathMatch: 'prefix',
        // children: productRoutes,
        loadChildren: () => import('./pages/product/product.routes').then(m => m.productRoutes),
    },
    {
        path: '**',
        component: NotFound,
    },
];

// url = http://localhost:4200/product/id/type
// host = http://localhost:4200/

// segments = product/id/type
