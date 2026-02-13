import {CanMatchFn} from '@angular/router';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const canMatchTestGuard: CanMatchFn = (_route, _segments) => {
     
    return confirm('Разрешить применить данный конфиг?');
};
