import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TuiPreviewModule, TuiPreviewPaginationComponent} from '@taiga-ui/addon-preview';

describe(`PreviewPagination`, () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    @Component({
        template: `
            <tui-preview-pagination
                [length]="length"
                [(index)]="index"
            ></tui-preview-pagination>
        `,
    })
    class TestComponent {
        @ViewChild(TuiPreviewPaginationComponent, {static: true})
        component!: TuiPreviewPaginationComponent;

        index = 0;
        length = 11;
    }

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TuiPreviewModule],
            declarations: [TestComponent],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe(`Preview pagination`, () => {
        it(`0 switching to 1`, () => {
            testComponent.component.onArrowClick(1);
            fixture.detectChanges();

            expect(testComponent.index).toBe(1);
        });

        it(`left arrow disabled`, () => {
            const arrowLeft = getLeftArrow();

            expect(arrowLeft.hasAttribute(`disabled`)).toBe(true);
        });

        it(`left arrow enabled`, () => {
            testComponent.index = 1;
            fixture.detectChanges();

            const arrowLeft = getLeftArrow();

            expect(arrowLeft.hasAttribute(`disabled`)).toBe(false);
        });

        it(`right arrow disabled`, () => {
            testComponent.index = 10;
            fixture.detectChanges();

            const arrowRight = getRightArrow();

            expect(arrowRight.hasAttribute(`disabled`)).toBe(true);
        });

        it(`right arrow enabled`, () => {
            const arrowRight = getRightArrow();

            expect(arrowRight.hasAttribute(`disabled`)).toBe(false);
        });
    });

    function getLeftArrow(): HTMLElement {
        return fixture.debugElement.query(By.css(`.t-arrow_left`)).nativeElement;
    }

    function getRightArrow(): HTMLElement {
        return fixture.debugElement.query(By.css(`.t-arrow_right`)).nativeElement;
    }
});
