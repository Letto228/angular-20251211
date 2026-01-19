import {
    ChangeDetectionStrategy,
    Component,
    signal,
    TemplateRef,
    viewChild,
    ViewContainerRef,
} from '@angular/core';
import {Card} from './card/card';
import {productsMock} from '../../shared/products/products.mock';

@Component({
    selector: 'app-products-list',
    imports: [Card],
    templateUrl: './products-list.html',
    styleUrl: './products-list.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsList {
    readonly products = signal(productsMock);

    private readonly cardTemplateRef = viewChild.required<TemplateRef<unknown>>('cardTemplate');
    private readonly cardViewContainerRef = viewChild.required('viewPort', {
        read: ViewContainerRef,
    });

    constructor() {
        setTimeout(() => {
            this.cardViewContainerRef().createEmbeddedView(this.cardTemplateRef());
        }, 3000);
    }
}
