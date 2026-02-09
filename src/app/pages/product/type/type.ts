import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-type',
    templateUrl: './type.html',
    styleUrl: './type.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink],
})
export class Type {}
