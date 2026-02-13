import {Directive} from '@angular/core';
import {NG_VALIDATORS, Validator} from '@angular/forms';
import {isStringValidator} from '../is-string-validator';

@Directive({
    selector: '[appIsStringValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: IsStringValidator,
            // useValue: {validate: isStringValidator}
        },
    ],
})
export class IsStringValidator implements Validator {
    // validate(control: AbstractControl): ValidationErrors | null {
    //   return Number(control.value) ? {isStringValidator: false} : null;
    // }

    validate = isStringValidator;
}
