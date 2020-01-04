import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[immediateClick]'
})
export class immediateClickDirective implements OnInit {

    constructor(private element: ElementRef<any>) { }

    ngOnInit(): void {
        this.element.nativeElement.click();
    }
}