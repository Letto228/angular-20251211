import {Component} from '@angular/core';
import {Header} from './main-components/header/header';
import {Card} from './pages/products-list/card/card';

@Component({
    selector: 'app-root',
    imports: [Header, Card],
    templateUrl: './app.html',
    styleUrl: './app.css',
})
export class App {}
