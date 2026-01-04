import {Component} from '@angular/core';
import {ProductsCard} from './products-card';
import {type Product, productsMock} from '@/shared';

@Component({
    selector: 'app-products-list',
    imports: [ProductsCard],
    templateUrl: './products-list.html',
    styleUrl: './products-list.css',
})
export class ProductsList {
    protected readonly product = productsMock[0];

    buyProduct(event: Product) {
        console.log('Добавили в корзину:', event.name);
    }
}
