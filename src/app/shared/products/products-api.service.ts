import {catchError, map, Observable, of} from 'rxjs';
import {Product} from './product.type';
import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ProductsApiService {
    private readonly httpClient = inject(HttpClient);

    getProducts$(): Observable<Product[]> {
        return this.httpClient.get<{data: {items: Product[]}}>(`/products/suggestion`).pipe(
            map(productsDto => productsDto.data.items),
            catchError(() => of([])),
        );
    }

    getProduct$(id: Product['_id']): Observable<Product | undefined> {
        return this.httpClient.get<{data: Product}>(`/products/${id}`).pipe(map(({data}) => data));
    }
}
