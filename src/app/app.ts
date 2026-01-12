import {Component, signal} from '@angular/core';
import {Header} from './main-components/header/header';
import {Sidenav} from './main-components/sidenav/sidenav';
import {Card} from './pages/products-list/card/card';
import {productsMock} from './shared/products/products.mock';

@Component({
    selector: 'app-root',
    imports: [Header, Sidenav, Card],
    templateUrl: './app.html',
    styleUrl: './app.css',
})
export class App {
    protected readonly title = 'angular-20251211';
    protected readonly imgSrc = './favicon.ico';
    protected readonly product = productsMock[0];
    private isProductBuy = signal(false);

    public readonly sidenavOpenedStore = signal(true);

    toggleSidenav() {
        this.sidenavOpenedStore.update(isOpened => !isOpened);
    }

    onProductBuy(event: boolean) {
        this.isProductBuy.set(event);
    }
}
