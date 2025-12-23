import {Component} from '@angular/core';
import {productsMock} from '../../../shared/products/products.mock';
import {
    MatCard,
    MatCardActions,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';

@Component({
    selector: 'app-card',
    imports: [MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle, MatButton],
    templateUrl: './card.html',
    styleUrl: './card.css',
})
export class Card {
    readonly product = productsMock[0];
    onProductBuyClick() {
        console.log('product');
    }
}
