import {Routes} from '@angular/router';
import {ProductsList} from './pages/products-list/products-list';
import {Product} from './pages/product/product';
import {NotFound} from './pages/not-found/not-found';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/products-list',
        pathMatch: 'full',
    },
    {
        path: 'products-list',
        component: ProductsList,
        pathMatch: 'full',
    },
    {
        path: 'product/id',
        component: Product,
        pathMatch: 'full',
    },
    {
        path: '**',
        component: NotFound,
    },
];

// url = http://localhost:4200/product/id/fafdsafda
// host = http://localhost:4200/

// segments = product/id/fafdsafda
