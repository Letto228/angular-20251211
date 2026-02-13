import {FormControl, FormsModule, NgModel} from '@angular/forms';
import {IsStringValidator} from './is-string-validator';
import {Component, signal} from '@angular/core';
import {ComponentFixture, fakeAsync, flush, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

describe('IsStringValidator isolate', () => {
    // const directive = new IsStringValidator(); // bad

    let directive: IsStringValidator;

    beforeEach(() => {
        directive = new IsStringValidator();
    });

    it('should create an instance', () => {
        expect(directive).toBeTruthy();
    });

    it('String no error', () => {
        const error = directive.validate(new FormControl('String'));

        expect(error).toEqual(null);
    });

    it('Number error', () => {
        const error = directive.validate(new FormControl('123'));

        expect(error).toEqual({isStringValidator: false});
    });
});

@Component({
    selector: 'app-test-component',
    imports: [FormsModule, IsStringValidator],
    template: `
        <input appIsStringValidator [(ngModel)]="search" />
    `,
})
class TestComponent {
    readonly search = signal('123');
    // readonly ngModel = viewChild(NgModel);
}

describe('IsStringValidator integration', () => {
    let fixture: ComponentFixture<TestComponent>;
    // let component: TestComponent;
    let testNgModel: NgModel;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);

        // component = fixture.componentInstance;
        // testNgModel = component.ngModel();

        const inputDebugElement = fixture.debugElement.query(By.css('input'));

        testNgModel = inputDebugElement.injector.get(NgModel);
    });

    // it('Number error', async () => {
    //     fixture.detectChanges();

    //     await fixture.whenStable();

    //     const errors = testNgModel.errors;

    //     console.log(testNgModel.value);

    //     expect(errors).toEqual({isStringValidator: false});
    // });

    it('Number error', fakeAsync(() => {
        fixture.detectChanges();

        // tick(0);
        // tick(100);

        flush();
        // flushMicrotasks();

        const errors = testNgModel.errors;

        console.log(testNgModel.value);

        expect(errors).toEqual({isStringValidator: false});
    }));
});
