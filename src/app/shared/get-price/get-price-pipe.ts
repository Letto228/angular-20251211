import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'getPrice',
    // pure: false,
})
export class GetPricePipe implements PipeTransform {
    // transform(price: number, code: string) {
    transform(price: number, code = '$'): string {
        console.log('Claculate price by pipe');

        return `${price} ${code}`;
    }
}
