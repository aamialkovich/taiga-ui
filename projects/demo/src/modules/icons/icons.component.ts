import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {assets} from '@demo/utils';
import {TuiBrightness, TuiModeDirective} from '@taiga-ui/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {debounceTime, map, share, startWith} from 'rxjs/operators';

import {DemoTuiIconsTabs, TUI_DEMO_ICONS} from './icons.tokens';

@Component({
    selector: 'icons',
    templateUrl: './icons.template.html',
    styleUrls: ['./icons.style.less'],
    changeDetection,
})
export class IconsComponent {
    private readonly currentColor$ = new BehaviorSubject('');
    readonly keys = Object.keys(this.icons);
    readonly exampleModule = import('./import/import-module.md?raw');

    readonly exampleHtml = import('./import/insert-template.md?raw');
    appearance = false;
    transparent = false;

    color$ = this.currentColor$.pipe(debounceTime(200), share());

    readonly iconVariants: readonly string[] = [
        'https://ng-web-apis.github.io/dist/assets/images/web-api.svg',
        'tuiIconHelpCircle',
        `<svg xmlns="http://www.w3.org/2000/svg"
             width="24px"
             height="24px"
             viewBox="0 0 24 24">
            <path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5
                c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3
                s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>
        </svg>`,
        assets`/images/ts.svg#ts`,
        assets`/images/undefined.svg`,
    ];

    icon = this.iconVariants[0];

    readonly mode$: Observable<TuiBrightness> = this.mode.change$.pipe(
        startWith(null),
        map(() => this.mode.mode || 'onLight'),
    );

    constructor(
        @Inject(TUI_DEMO_ICONS) readonly icons: DemoTuiIconsTabs,
        @Inject(TuiModeDirective) private readonly mode: TuiModeDirective,
    ) {}

    onIntersection(entries: IntersectionObserverEntry[]): boolean {
        return entries[entries.length - 1]?.isIntersecting ?? false;
    }

    colorChange(color: string): void {
        this.currentColor$.next(color);
    }
}
