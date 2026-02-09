import {inject, Injectable, signal} from '@angular/core';
import {Product} from './product.type';
import {ProductsApiService} from './products-api.service';
import {Subscription} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductsStoreService {
    private readonly productsApiService = inject(ProductsApiService);

    private readonly productsStore = signal<Product[] | null>(null);
    private readonly currentProductStore = signal<Product | null>(null);

    private loadProductsSubscription: Subscription | null = null;
    private loadCurrentProductSubscription: Subscription | null = null;

    getProducts(): ReturnType<ProductsStoreService['productsStore']> {
        return this.productsStore();
    }

    getProduct(): ReturnType<ProductsStoreService['currentProductStore']> {
        return this.currentProductStore();
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

    loadProduct(id: Product['_id']): void {
        if (this.loadCurrentProductSubscription) {
            this.loadCurrentProductSubscription.unsubscribe();
        }

        const productPreview = this.productsStore()?.find(({_id}) => _id === id);

        this.currentProductStore.set(productPreview || null);

        this.loadCurrentProductSubscription = this.productsApiService
            .getProduct$(id)
            .subscribe(product => {
                this.currentProductStore.set(product || null);

                this.loadCurrentProductSubscription = null;
            });
    }
}
