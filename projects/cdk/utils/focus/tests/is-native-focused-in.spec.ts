import {tuiIsNativeFocusedIn} from '@taiga-ui/cdk';

describe(`isNativeFocusedIn`, () => {
    it(`element is not focused in`, () => {
        const element = document.createElement(`button`);

        expect(tuiIsNativeFocusedIn(element)).toBe(false);
    });

    it(`should return false if ownerDocument is null`, () => {
        const element = {ownerDocument: null} as unknown as Node;

        expect(tuiIsNativeFocusedIn(element)).toBe(false);
    });
});
