import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Card} from './card/card';
import {Product} from '../../shared/products/product.type';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {ScrollWithLoadingDirective} from '../../shared/scroll-with-loading/scroll-with-loading.directive';
import {FilterByPropertyPipe} from '../../shared/filter-by-property/filter-by-property-pipe';
import {ProductsStoreService} from '../../shared/products/products-store.service';
import {RouterLink} from '@angular/router';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {JsonPipe} from '@angular/common';
import {IsStringValidator} from './validators/is-string-validator/is-string-validator';

@Component({
    selector: 'app-products-list',
    imports: [
        Card,
        MatProgressSpinner,
        ScrollWithLoadingDirective,
        FilterByPropertyPipe,
        RouterLink,
        MatInput,
        MatFormField,
        MatLabel,
        JsonPipe,
        IsStringValidator,
    ],
    templateUrl: './products-list.html',
    styleUrl: './products-list.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsList {
    private readonly productsStoreService = inject(ProductsStoreService);

    constructor() {
        this.productsStoreService.loadProducts();
    }

    protected products(): Product[] | null {
        return this.productsStoreService.getProducts();
    }

    protected loadNextData() {
        console.log('Load next data');
    }
}
