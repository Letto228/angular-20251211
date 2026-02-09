import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ProductsStoreService} from '../../shared/products/products-store.service';
import {filter, map} from 'rxjs';
import {Carousel} from '../../shared/carousel/carousel';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {ActivatedRoute, Router, RouterOutlet, RouterLinkWithHref} from '@angular/router';

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
    private readonly router = inject(Router);
    private readonly activatedRoute = inject(ActivatedRoute);

    // private readonly currentProductId$ = of('96-planset-dexp-ursus-s290-32-gb-3g-cernyj')
    private readonly currentProductId$ = this.activatedRoute.paramMap.pipe(
        map(paramMap => paramMap.get('id')),
        // filter(id => !!id),
        // filter(id => Boolean(id)),
        filter(Boolean),
    );

    constructor() {
        this.currentProductId$.pipe(takeUntilDestroyed()).subscribe(id => {
            this.productsStoreService.loadProduct(id);
        });

        // const productId = this.activatedRoute.snapshot.paramMap.get('id');

        // if (productId) {
        //     this.productsStoreService.loadProduct(productId);
        // }

        // setTimeout(() => {
        //     this.router.navigateByUrl(`/product/50-127-sm-televizor-led-harper-50u750ts-cernyj`);
        // }, 5000)

        console.log(this.activatedRoute.snapshot);
    }

    protected getProduct(): ReturnType<ProductsStoreService['getProduct']> {
        return this.productsStoreService.getProduct();
    }

    protected navigateToTab(tabName: string): void {
        // this.router.navigateByUrl(`./${tabName}`);

        // const urlTree = this.router.createUrlTree([`./${tabName}`])
        // const urlTree = this.router.createUrlTree(['./', tabName], {relativeTo: this.activatedRoute});

        // console.log(urlTree.toString());

        // this.router.navigateByUrl(urlTree.toString());
        // this.router.navigateByUrl(urlTree);

        this.router.navigate(['./', tabName], {relativeTo: this.activatedRoute});
    }
}
