import {Directive, forwardRef, Input} from '@angular/core';
import {AbstractTuiController, tuiCreateTokenFromFactory} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';

export const TUI_TEXTFIELD_SIZE = tuiCreateTokenFromFactory(
    () => new TuiTextfieldSizeDirective(),
);

@Directive({
    selector: '[tuiTextfieldSize]',
    providers: [
        {
            provide: TUI_TEXTFIELD_SIZE,
            useExisting: forwardRef(() => TuiTextfieldSizeDirective),
        },
    ],
})
export class TuiTextfieldSizeDirective extends AbstractTuiController {
    @Input('tuiTextfieldSize')
    size: TuiSizeL | TuiSizeS = 'l';
}
