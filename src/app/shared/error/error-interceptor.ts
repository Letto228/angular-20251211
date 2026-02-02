import {HttpInterceptorFn} from '@angular/common/http';
import {retry, tap} from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (request, next) => {
    return next(request).pipe(
        retry({
            count: 3,
            delay: 2000,
        }),
        tap({
            error(error) {
                console.log(error);
            },
        }),
    );
};
