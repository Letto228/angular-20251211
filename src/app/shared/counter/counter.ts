import {ChangeDetectionStrategy, Component, input, signal} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {MatIconButton} from '@angular/material/button';

@Component({
    selector: 'app-counter',
    imports: [MatIconButton],
    templateUrl: './counter.html',
    styleUrl: './counter.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: Counter,
            multi: true,
        },
    ],
})
export class Counter implements ControlValueAccessor {
    readonly step = input(1);

    readonly counter = signal(0);
    readonly isDisabled = signal(false);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    private onChange = (_newValue: number): void => {
        throw new Error(
            'Функция onChange не была установлена, значение в механизм Angular form не было передано',
        );
    };

    private onTouched = (): void => {
        throw new Error(
            'Функция onTouched не была установлена, механизм Angular form не получил состояние тронутости',
        );
    };

    writeValue(newValue: unknown): void {
        console.log('writeValue', newValue);

        this.counter.set(typeof newValue === 'number' ? newValue : 0);
    }

    registerOnChange(onChangeCb: (newValue: number) => void): void {
        this.onChange = onChangeCb;
    }

    registerOnTouched(onTouchedCb: () => void): void {
        this.onTouched = onTouchedCb;
    }

    setDisabledState(isDisabled: boolean): void {
        this.isDisabled.set(isDisabled);
    }

    back() {
        this.counter.update(counter => counter - this.step());

        this.onChange(this.counter());
        this.onTouched();
    }

    next() {
        this.counter.update(counter => counter + this.step());

        this.onChange(this.counter());
        this.onTouched();
    }
}
