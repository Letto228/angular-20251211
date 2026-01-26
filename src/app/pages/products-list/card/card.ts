import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
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
import {Carousel} from '../../../shared/carousel/carousel';
import {GetPricePipe} from '../../../shared/get-price/get-price-pipe';
import {CurrencyPipe, JsonPipe} from '@angular/common';

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
        Carousel,
        GetPricePipe,
        JsonPipe,
        CurrencyPipe,
    ],
    templateUrl: './card.html',
    styleUrl: './card.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
    readonly product = input.required<Product>();

    readonly buy = output<Product['_id']>();

    constructor() {
        console.log('Card created');
    }

    protected onProductBuy(event: Event) {
        event.stopPropagation();

        this.buy.emit(this.product()._id);
    }

    protected isStarActive(starIndex: number): boolean {
        return this.product().rating >= starIndex;
    }

    // protected getPrice(price: number) {
    //     console.log('Claculate price by method');

    //     return `${price} $`;
    // }

    protected readonly getPrice = getPrice;
}

function getPrice(price: number) {
    console.log('Claculate price by method');

    return `${price} $`;
}
