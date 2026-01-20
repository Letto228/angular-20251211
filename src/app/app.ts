import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatList, MatListItem} from '@angular/material/list';
import {Header} from './main-components/header/header';
import {PopupHost} from './main-components/popup-host/popup-host';
import {Sidenav} from './main-components/sidenav/sidenav';
import {ProductsList} from './pages/products-list/products-list';

@Component({
    selector: 'app-root',
    imports: [ProductsList, Header, Sidenav, MatList, MatListItem, PopupHost],
    templateUrl: './app.html',
    styleUrl: './app.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
    protected readonly title = 'angular-20251211';
    protected readonly imgSrc = './favicon.ico';

    readonly switchTemplate = signal(false);
    readonly closeTemplate = signal(true);

    constructor() {
        setInterval(() => {
            this.toggleTemplate();
            console.log(this.switchTemplate());
        }, 3000);
    }

    private toggleTemplate() {
        this.switchTemplate.set(!this.switchTemplate());
        // or
        this.closeTemplate.set(!this.closeTemplate());
    }
}
