import { Component, Input, EventEmitter, Output, OnChanges } from '@angular/core';
@Component({
    selector: 'app-stockstatus',
    template: `<input type='number' [(ngModel)]='updatedstockvalue'/> <button class='btn btn-primary'
     [style.background]='color'
     (click)="stockValueChanged()">Stock Indicator</button> `
})
export class StockstatusComponent implements OnChanges {
    @Input('stock') stock: number;
    @Input() productId: number;
    @Output() stockValueChange = new EventEmitter();
    color = '';
    updatedstockvalue: number;
    stockValueChanged() {
      console.log("------this.updatedstockvalue---------"+this.updatedstockvalue)
        this.stockValueChange.emit({ id: this.productId, updatdstockvalue: this.updatedstockvalue });
        this.updatedstockvalue = null;
    }
    ngOnChanges() {
        if (this.stock > 10) {
            this.color = 'green';
        } else {
            this.color = 'red';
        }
    }
}