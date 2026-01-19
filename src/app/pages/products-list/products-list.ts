import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {Card} from './card/card';
import {productsMock} from '../../shared/products/products.mock';
import {Product} from '../../shared/products/product.type';
import {NgFor, NgIf} from '@angular/common';

// type CardTemplateContext = {
//     currentItem: Product;
//     index: number;
//     $implicit: Product;
// }

@Component({
    selector: 'app-products-list',
    imports: [Card, NgFor, NgIf],
    templateUrl: './products-list.html',
    styleUrl: './products-list.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsList {
    readonly products = signal<null | Product[]>(null);

    constructor() {
        // setTimeout(() => {
        //     this.products.update(products => ([...products]).reverse())
        // }, 3000);

        setTimeout(() => {
            this.products.set(productsMock);
        }, 3000);

        setTimeout(() => {
            this.products.set(productsMock.map(product => ({...product})));
            // this.products.set([...productsMock]);
        }, 6000);
    }

    productTrackBy(index: number, item: Product) {
        return item._id;
    }

    // private readonly cardTemplateRef = viewChild.required<TemplateRef<CardTemplateContext>>('cardTemplate');
    // private readonly cardViewContainerRef = viewChild.required('viewPort', {
    //     read: ViewContainerRef,
    // });

    // constructor() {
    //     setTimeout(() => {
    //         this.products().forEach((product, index) => {
    //             this.cardViewContainerRef().createEmbeddedView(
    //                 this.cardTemplateRef(),
    //                 {currentItem: product, index, $implicit: product}
    //             );
    //         });
    //     }, 3000);
    // }
}
