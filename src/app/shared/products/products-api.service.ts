import {catchError, map, Observable, of} from 'rxjs';
import {Product} from './product.type';
import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ProductsApiService {
    private readonly httpClient = inject(HttpClient);

    getProducts$(): Observable<Product[]> {
        // return of([])
        // return of(productsMock);

        return (
            this.httpClient
                // .get<{data: {items: Product[]}}>(`${baseUrl}/products/suggestion`)
                .get<{data: {items: Product[]}}>(`/products/suggestion`)
                .pipe(
                    map(productsDto => productsDto.data.items),
                    // retry({
                    //     count: 3,
                    //     delay: 3000,
                    // }),
                    // tap({
                    //     error: () => {

                    //     }
                    // }),
                    catchError(() => of([])),
                )
        );
    }
}
