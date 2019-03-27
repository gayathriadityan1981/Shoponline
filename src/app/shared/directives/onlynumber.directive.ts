import {Directive,ElementRef,HostListener,Input} from '@angular/core';
import {NgControl } from '@angular/forms';
@Directive({
    selector:'[numbersOnly]'
})
export class OnlynumberDirective{
    constructor(private _el:ElementRef){}

    @HostListener('input',['$event']) onInputChange(event){
        const initialValue=this._el.nativeElement.value;
        this._el.nativeElement.value=initialValue.replace(/[^0-9]*/g, '');
        if(initialValue!=this._el.nativeElement.value){
            event.stopProbagation();
        }
    }
}