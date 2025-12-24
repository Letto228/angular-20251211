import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {productsMock} from '../../../shared/products/products.mock';
import {MatButtonModule} from '@angular/material/button';
@Component({
    selector: 'app-card',
    imports: [MatCardModule, MatButtonModule],
    templateUrl: './card.html',
    styleUrl: './card.css',
})
export class Card {
    protected readonly imgUrl = productsMock[0].images[0].url;
    protected readonly price = productsMock[0].price;

    onClick(event: Event) {
        console.log(event);
    }
}
