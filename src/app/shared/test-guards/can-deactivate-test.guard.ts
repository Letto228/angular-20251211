import {CanDeactivateFn} from '@angular/router';

export const canDeactivateTestGuard: CanDeactivateFn<unknown> = (
    component,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _currentRoute,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _currentState,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _nextState,
) => {
    console.log(component);
     
    return confirm('Разрешить покинуть данную страницу?');
};
