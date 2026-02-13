import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class BrandsApiService {
    private readonly httpClient = inject(HttpClient);

    getBrands$(): Observable<string[]> {
        return this.httpClient.get<{data: string[]}>('/brands').pipe(map(({data}) => data));
    }
}
