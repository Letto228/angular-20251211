import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ProductsStoreService} from '../../shared/products/products-store.service';
import {filter, map} from 'rxjs';
import {Carousel} from '../../shared/carousel/carousel';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {ActivatedRoute, RouterOutlet, RouterLinkWithHref} from '@angular/router';

@Component({
    selector: 'app-product',
    imports: [
        Carousel,
        MatIcon,
        MatIconButton,
        MatTabsModule,
        MatProgressSpinner,
        RouterOutlet,
        RouterLinkWithHref,
    ],
    templateUrl: './product.html',
    styleUrl: './product.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Product {
    private readonly productsStoreService = inject(ProductsStoreService);
    private readonly activatedRoute = inject(ActivatedRoute);

    private readonly currentProductId$ = this.activatedRoute.paramMap.pipe(
        map(paramMap => paramMap.get('id')),
        filter(Boolean),
    );

    constructor() {
        this.currentProductId$.pipe(takeUntilDestroyed()).subscribe(id => {
            this.productsStoreService.loadProduct(id);
        });
    }

    protected getProduct(): ReturnType<ProductsStoreService['getProduct']> {
        return this.productsStoreService.getProduct();
    }
}
