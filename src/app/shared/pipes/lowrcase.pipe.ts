import {Pipe,PipeTransform} from '@angular/core';
@Pipe({name:'lowrcase'})
export class LowrcasePipe implements PipeTransform{
    transform(value:any){
        return typeof value==='string' && value.charAt(0).toLowerCase+value.slice(1)||value;
    }
}