import {CanActivateFn} from '@angular/router';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const canActivateTestGuard: CanActivateFn = (_route, _state) => {
     
    return confirm('Разрешить переход на данную страницу?');
    // return inject(Router).createUrlTree();
};
