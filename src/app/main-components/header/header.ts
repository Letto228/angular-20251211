import {Component, input, output} from '@angular/core';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatToolbar} from '@angular/material/toolbar';

interface ApplicationConfig {
    title: string;
    imgSrc: string;
}

@Component({
    selector: 'app-header',
    imports: [MatToolbar, MatIcon, MatIconButton],
    templateUrl: './header.html',
    styleUrl: './header.css',
})
export class Header {
    public readonly applicationConfig = input.required<ApplicationConfig>();

    public readonly menuClick = output<Event>();
}
