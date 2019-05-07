import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {FotografoService} from '../fotografo.service';
import {Fotografo} from '../fotografo';
import {SessionService} from '../../session.service';
@Component({
    selector: 'app-fotografo-create',
    templateUrl: './fotografo-create.component.html',
    styleUrls: ['./fotografo-create.component.css'],
    providers: [DatePipe]
})
export class FotografoCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param fotoService The calificacion's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp: DatePipe,
        private fotografoService: FotografoService,
        private toastrService: ToastrService,
        private sessionService: SessionService
    ) {}

    /**
    * The new calificacion
    */
    fotografo: Fotografo;

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
    * Creates an calificacion
    */
    createFotografo(): Fotografo {

        this.fotografoService.createFotografo(this.fotografo)
            .subscribe((fotografo) => {
                this.fotografo = fotografo;
                this.create.emit();
                this.sessionService.setSession(this.fotografo);
                this.toastrService.success("The calificacion was created", "calificacion creation");

            });
        return this.fotografo;
    }

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
        this.fotografo = new Fotografo();
    }

}
