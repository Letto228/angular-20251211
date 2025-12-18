import {Component} from '@angular/core';
import {Header} from './main-components/header/header';

@Component({
    selector: 'app-root',
    imports: [Header],
    templateUrl: './app.html',
    styleUrl: './app.css',
})
export class App {}
