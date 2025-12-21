import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {productsMock} from '../../../shared/products/products.mock';
import {Product} from '../../../shared/products/product.type';

@Component({
    selector: 'app-product-card',
    imports: [MatCardModule],
    templateUrl: './product-card.html',
    styleUrl: './product-card.css',
})
export class ProductCard {
    public readonly products: Product[] = productsMock;
}
