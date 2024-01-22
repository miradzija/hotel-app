import { NgModule } from '@angular/core';
import { ReservationModule } from '../reservation/reservation.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@NgModule({
    declarations: [
        ReservationModule
    ],
    imports: [
        FormBuilder,
        FormGroup,
        Validators],
})
export class ReservationModuleModule { }