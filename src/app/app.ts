import {Component, signal} from '@angular/core';
import {Header} from './main-components/header/header';
import {Sidenav} from './main-components/sidenav/sidenav';
import {ProductsList} from '@/pages/products-list/products-list';

@Component({
    selector: 'app-root',
    imports: [Header, Sidenav, ProductsList],
    templateUrl: './app.html',
    styleUrl: './app.css',
})
export class App {
    protected readonly title = 'angular-20251211';
    protected readonly imgSrc = './favicon.ico';

    public readonly sidenavOpenedStore = signal(true);

    toggleSidenav() {
        this.sidenavOpenedStore.update(isOpened => !isOpened);
    }
}
