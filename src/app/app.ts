import {Component} from '@angular/core';
import {Header} from './main-components/header/header';
import {ProductCard} from './pages/products-list/card/product-card';

@Component({
    selector: 'app-root',
    imports: [Header, ProductCard],
    templateUrl: './app.html',
    styleUrl: './app.css',
})
export class App {}
