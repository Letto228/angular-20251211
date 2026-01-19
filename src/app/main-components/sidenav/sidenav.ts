import {ChangeDetectionStrategy, Component, viewChild} from '@angular/core';
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

    public toggle(): void {
        this.drawerComponent().toggle();
    }
}
