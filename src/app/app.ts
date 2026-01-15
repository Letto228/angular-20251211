import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {Header} from './main-components/header/header';
import {Sidenav} from './main-components/sidenav/sidenav';
import {MatList, MatListItem} from '@angular/material/list';
import {ProductsList} from './pages/products-list/products-list';

@Component({
    selector: 'app-root',
    imports: [ProductsList, Header, Sidenav, MatList, MatListItem],
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
        }, 3000);
    }

    private toggleTemplate() {
        this.switchTemplate.set(!this.switchTemplate());
        // or
        this.closeTemplate.set(!this.closeTemplate());
    }
}
