import {
    ChangeDetectionStrategy,
    Component,
    input,
    signal,
    TemplateRef,
    viewChild,
    ViewContainerRef,
} from '@angular/core';
import {MatAnchor, MatButton} from '@angular/material/button';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.html',
    styleUrl: './popup-host.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatAnchor, MatButton],
})
export class PopupHost {
    readonly template = input<TemplateRef<unknown> | null>(null);
    protected readonly shouldShowPopup = signal(true);

    private readonly viewContainerRef = viewChild.required('viewPort', {
        read: ViewContainerRef,
    });

    constructor() {
        setInterval(() => {
            const template = this.template();
            if (template) {
                this.viewContainerRef().createEmbeddedView(template);
                this.viewContainerRef().clear();
                this.viewContainerRef().createEmbeddedView(template);
            } else {
                this.viewContainerRef().clear();
                this.close();
            }
        }, 3000);
    }

    close(): void {
        if (!this.template()) {
            this.shouldShowPopup.set(false);
        }
    }
}
