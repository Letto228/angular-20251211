import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {productsMock} from '../../../shared/products/products.mock';
import {Product} from '../../../shared/products/product.type';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'app-product-card',
    imports: [MatCardModule, MatButtonModule],
    templateUrl: './product-card.html',
    styleUrl: './product-card.css',
})
export class ProductCard {
    public readonly products: Product[] = productsMock;

    addToCard(): void {
        console.log('добавляем в корзину');
    }
}
