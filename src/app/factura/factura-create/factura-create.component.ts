import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { FacturaService } from '../factura.service';
import { Factura } from '../factura';

@Component({
    selector: 'app-factura-create',
    templateUrl: './factura-create.component.html',
    styleUrls: ['./factura-create.component.css'],
    providers: [DatePipe]
})
export class FacturaCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param facturaService The factura's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp: DatePipe,
        private facturaService: FacturaService,
        private toastrService: ToastrService
    ) { }

    /**
    * The new factura
    */
    factura: Factura;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an calificacion
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new calificacion
    */
    @Output() create = new EventEmitter();

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        console.log("Init de create");
        //this.factura = new Factura();
    }

}
