import {ChangeDetectionStrategy, Component, ElementRef, viewChild} from '@angular/core';
import {MatDrawer, MatDrawerContainer} from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    imports: [MatDrawer, MatDrawerContainer],
    templateUrl: './sidenav.html',
    styleUrl: './sidenav.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidenav {
    private readonly drawerComponent = viewChild.required(MatDrawer);
    private readonly drawerElementRef = viewChild.required<MatDrawer, ElementRef>(MatDrawer, {
        read: ElementRef,
    });

    public toggle(): void {
        this.drawerComponent().toggle();
    }
}
