import {Routes} from '@angular/router';
import {Description} from './description/description';
import {Type} from './type/type';

export const productRoutes: Routes = [
    {
        path: '',
        redirectTo: 'description',
        pathMatch: 'full',
    },
    {
        path: 'description',
        component: Description,
    },
    {
        path: 'type',
        component: Type,
    },
];
