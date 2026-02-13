import {TestBed} from '@angular/core/testing';

import {ProductsApiService} from './products-api.service';
import {provideHttpClient} from '@angular/common/http';
import {productsMock} from './products.mock';
import {HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';

// const httpClientMock: HttpClient = {
//     get() {
//         return EMPTY
//     }
// } as unknown as HttpClient;

describe('ProductsApiService', () => {
    let service: ProductsApiService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideHttpClient(), provideHttpClientTesting()],
            // providers: [
            //     {
            //         provide: HttpClient,
            //         useValue: httpClientMock,
            //     }
            // ]
        });
    });

    beforeEach(() => {
        service = TestBed.inject(ProductsApiService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        service.getProducts$().subscribe(products => {
            // expect(products).toBe([]);
            expect(products).toBe(productsMock);
        });

        httpTestingController
            .expectOne('/products/suggestion')
            .flush({data: {items: productsMock}});
    });

    // it('should be created', fakeAsync(() => {
    //     // spyOn(httpClientMock, 'get').and.returnValue(
    //     //     of({data: {items: productsMock}}),
    //     // );
    //     spyOn(httpClientMock, 'get').and.returnValue(
    //         timer(1000).pipe(map(() => ({data: {items: productsMock}}))),
    //     );

    //     service.getProducts$().subscribe(products => {
    //         // expect(products).toBe([]);
    //         expect(products).toBe(productsMock);
    //     });

    //     tick(1500);
    // }));

    // it('should be created', (done) => {
    //     // spyOn(httpClientMock, 'get').and.returnValue(
    //     //     of({data: {items: productsMock}}),
    //     // );
    //     spyOn(httpClientMock, 'get').and.returnValue(
    //         timer(10000).pipe(map(() => ({data: {items: productsMock}}))),
    //     );

    //     service.getProducts$().subscribe(products => {
    //         expect(products).toBe([]);
    //         // expect(products).toBe(productsMock);

    //         done();
    //     });
    // });
});
