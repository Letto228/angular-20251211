import {Routes} from '@angular/router';
import {NotFound} from './pages/not-found/not-found';
import {canDeactivateTestGuard} from './shared/test-guards/can-deactivate-test.guard';
import {canMatchTestGuard} from './shared/test-guards/can-match-test.guard';

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
        canDeactivate: [canDeactivateTestGuard],
    },
    {
        path: 'product/:id',
        loadComponent: () => import('./pages/product/product').then(m => m.Product),
        loadChildren: () => import('./pages/product/product.routes').then(m => m.productRoutes),
        // canActivate: [canActivateTestGuard],
        // canActivateChild: [canActivateChildTestGuard],
        canMatch: [canMatchTestGuard],
    },
    {
        path: '**',
        component: NotFound,
    },
];
