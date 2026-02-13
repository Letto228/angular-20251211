import {IsStringValidator} from './is-string-validator';

describe('IsStringValidator', () => {
    it('should create an instance', () => {
        const directive = new IsStringValidator();
        expect(directive).toBeTruthy();
    });
});
