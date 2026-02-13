import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Card} from './card/card';
import {Product} from '../../shared/products/product.type';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {ScrollWithLoadingDirective} from '../../shared/scroll-with-loading/scroll-with-loading.directive';
import {FilterByPropertyPipe} from '../../shared/filter-by-property/filter-by-property-pipe';
import {ProductsStoreService} from '../../shared/products/products-store.service';
import {Router, RouterLink} from '@angular/router';
import {Counter} from '../../shared/counter/counter';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
        Counter,
        ReactiveFormsModule,
        FormsModule,
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
    private readonly router = inject(Router);

    // counterStore = signal(22);

    // protected readonly counterControl = new FormControl(0);

    // counterControlValue = toSignal(this.counterControl.valueChanges);

    // filteredValue = computed(() => {
    //     const array = [];

    //     return array.filter(item => item === this.counterControlValue());
    // })

    // ----

    // protected readonly searchControl = new FormControl('', {
    //     validators: [isStringValidator, Validators.required, Validators.minLength(3)],
    // });

    constructor() {
        this.productsStoreService.loadProducts();

        // this.counterControl.invalid
        // this.counterControl.valid
        // this.counterControl.touched
        // this.counterControl.untouched
        // this.counterControl.pristine
        // this.counterControl.dirty
        // this.counterControl.value;
        // this.counterControl.setValue(12);

        // setTimeout(() => {
        //     // this.counterControl.setValue(22);
        //     // this.counterStore.set(34);
        // }, 3000);

        // this.counterControl.valueChanges.subscribe(console.log);
        // toSignal(this.counterControl.valueChanges);
    }

    protected products(): Product[] | null {
        return this.productsStoreService.getProducts();
    }

    protected loadNextData() {
        console.log('Load next data');
    }
}
