import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [
    NgModule],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent {
  reservationForm: FormGroup = new FormGroup({});

  onSubmit() {

  }
}
