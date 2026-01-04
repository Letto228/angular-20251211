import {Component, computed, input, output} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import type {Product} from '@/shared';

@Component({
    selector: 'app-products-card',
    templateUrl: './products-card.html',
    styleUrl: './products-card.scss',
    imports: [MatCardModule, MatButtonModule, MatIconModule],
})
export class ProductsCard {
    readonly product = input.required<Product>();
    readonly buyProductEvent = output<Product>();

    protected readonly productImage = computed(() => this.product().images[0].url);

    buyProduct() {
        this.buyProductEvent.emit(this.product());
    }
}
