import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {Card} from './card/card';
import {productsMock} from '../../shared/products/products.mock';
import {Product} from '../../shared/products/product.type';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {ScrollWithLoadingDirective} from '../../shared/scroll-with-loading/scroll-with-loading.directive';
import {FilterByPropertyPipe} from '../../shared/filter-by-property/filter-by-property-pipe';

@Component({
    selector: 'app-products-list',
    imports: [Card, MatProgressSpinner, ScrollWithLoadingDirective, FilterByPropertyPipe],
    templateUrl: './products-list.html',
    styleUrl: './products-list.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsList {
    readonly products = signal<null | Product[]>(null);

    // For easy
    readonly name = signal('Мышь');

    // For hard
    readonly propertyName = 'feedbacksCount' as const; // keyof Product
    readonly searchPropertyValue = signal(5);

    constructor() {
        setTimeout(() => {
            this.products.set(productsMock);
        }, 3000);
    }

    protected loadNextData() {
        console.log('Load next data');
    }
}
