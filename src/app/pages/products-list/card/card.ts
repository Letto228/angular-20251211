import {Component, input, output} from '@angular/core';
import {
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatButton, MatIconButton} from '@angular/material/button';
import {Product} from '../../../shared/products/product.type';

@Component({
    selector: 'app-card',
    imports: [
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardSubtitle,
        MatIcon,
        MatCardActions,
        MatCardContent,
        MatIconButton,
        MatButton,
    ],
    templateUrl: './card.html',
    styleUrl: './card.css',
})
export class Card {
    public readonly product = input.required<Product>();
    public readonly purchase = output<boolean>();

    onProductBuy(event: boolean) {
        this.purchase.emit(event);
    }

    isStarActive(starIndex: number): boolean {
        return this.product().rating >= starIndex;
    }
}
