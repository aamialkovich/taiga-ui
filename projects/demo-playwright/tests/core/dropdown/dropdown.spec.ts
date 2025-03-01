import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe(`Dropdown`, () => {
    test.use({viewport: {width: 720, height: 720}});

    test(`base`, async ({page}) => {
        await tuiGoto(page, `/directives/dropdown#base`);
        await new TuiDocumentationPagePO(page)
            .getExample(`#base`)
            .locator(`button`)
            .click();
        await expect(page).toHaveScreenshot(`01-dropdown.png`);
    });

    test(`Interesting`, async ({page}) => {
        await tuiGoto(page, `/directives/dropdown#full-featured`);
        await new TuiDocumentationPagePO(page)
            .getExample(`#full-featured`)
            .locator(`input`)
            .click();
        await expect(page).toHaveScreenshot(`02-dropdown.png`);
    });

    test(`Appearance`, async ({page}) => {
        await tuiGoto(page, `/directives/dropdown#appearance`);
        await new TuiDocumentationPagePO(page)
            .getExample(`#appearance`)
            .locator(`input`)
            .click();
        await expect(page).toHaveScreenshot(`03-dropdown.png`);
    });

    test(`Hosted dropdown`, async ({page}) => {
        await tuiGoto(page, `/components/hosted-dropdown#menu`);
        await new TuiDocumentationPagePO(page)
            .getExample(`#menu`)
            .locator(`button`)
            .click();
        await expect(page).toHaveScreenshot(`04-dropdown.png`);
    });

    test(`Hosted dropdown and custom position`, async ({page}) => {
        await tuiGoto(page, `/components/hosted-dropdown#position`);
        await new TuiDocumentationPagePO(page)
            .getExample(`#position`)
            .locator(`button`)
            .click();
        await expect(page).toHaveScreenshot(`05-dropdown.png`);
    });

    test(`Esc -> Hosted Dropdown`, async ({page}) => {
        await tuiGoto(page, `/components/hosted-dropdown#tui-dropdown-host`);
        await new TuiDocumentationPagePO(page)
            .getExample(`#tui-dropdown-host`)
            .locator(`button[tuiHostedDropdownHost]`)
            .click();
        await expect(page).toHaveScreenshot(`06-dropdown.png`);

        await page
            .locator(`tui-dropdown [automation-id='tui-select__textfield']`)
            .click();
        await expect(page).toHaveScreenshot(`07-dropdown.png`);

        await page.keyboard.press(`Escape`);
        await expect(page).toHaveScreenshot(`08-dropdown.png`);

        await page.keyboard.press(`Escape`);
        await expect(page).toHaveScreenshot(`09-dropdown.png`);
    });
});
