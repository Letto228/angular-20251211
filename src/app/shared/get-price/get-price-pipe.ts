import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'getPrice',
})
export class GetPricePipe implements PipeTransform {
    transform(price: number, code = '$'): string {
        console.log('Claculate price by pipe');

        return `${price} ${code}`;
    }
}
