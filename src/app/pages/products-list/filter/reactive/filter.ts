import {ChangeDetectionStrategy, Component, effect, input} from '@angular/core';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {Counter} from '../../../../shared/counter/counter';
import {FormArray, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatInput,
        MatFormField,
        MatLabel,
        MatCheckbox,
        MatProgressSpinner,
        Counter,
        ReactiveFormsModule,
    ],
})
export class FilterComponent {
    public readonly brands = input<string[] | null>(null);

    protected readonly form = new FormGroup({
        search: new FormControl({value: '', disabled: true}),
        // brands: new FormGroup({}),
        brands: new FormArray<FormControl<boolean | null>>([]),
        priceRange: new FormGroup({
            min: new FormControl(0),
            max: new FormControl(9999999),
        }),
    });

    constructor() {
        this.listenBrandsChange();

        // this.form.valueChanges.subscribe(console.log);
        this.form.get('search')?.valueChanges.subscribe(console.log);
        // this.form.get('search')?.disable();
        // this.form.setValue();
        // this.form.patchValue();
        console.log(this.form.value);
        console.log(this.form.getRawValue());
    }

    private listenBrandsChange() {
        effect(() => {
            const brandsControls = this.brands()?.map(() => new FormControl(false)) || [];
            const newBrandsForm = new FormArray(brandsControls);

            this.form.setControl('brands', newBrandsForm);
        });
    }
}
