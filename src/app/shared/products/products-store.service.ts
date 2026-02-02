import {inject, Injectable, signal} from '@angular/core';
import {Product} from './product.type';
import {ProductsApiService} from './products-api.service';
import {Subscription} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductsStoreService {
    private readonly productsApiService = inject(ProductsApiService);

    private readonly productsStore = signal<Product[] | null>(null);

    private loadProductsSubscription: Subscription | null = null;

    getProducts(): ReturnType<ProductsStoreService['productsStore']> {
        return this.productsStore();
    }

    loadProducts(): void {
        if (this.loadProductsSubscription) {
            this.loadProductsSubscription.unsubscribe();
        }

        this.loadProductsSubscription = this.productsApiService
            .getProducts$()
            .subscribe(products => {
                this.productsStore.set(products);

                this.loadProductsSubscription = null;
            });
    }
}
