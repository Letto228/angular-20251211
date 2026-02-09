import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Header} from './main-components/header/header';
import {Sidenav} from './main-components/sidenav/sidenav';
import {MatList, MatListItem} from '@angular/material/list';
import {InsertShadow} from './shared/insert-shadow/insert-shadow';
import {RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [Header, Sidenav, MatList, MatListItem, InsertShadow, RouterOutlet],
    templateUrl: './app.html',
    styleUrl: './app.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
    protected readonly title = 'angular-20251211';
    protected readonly imgSrc = './favicon.ico';
}
