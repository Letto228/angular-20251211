import {CanActivateChildFn} from '@angular/router';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const canActivateChildTestGuard: CanActivateChildFn = (_childRoute, _state) => {
     
    return confirm('Разрешить переход на дочернюю страницу?');
};
