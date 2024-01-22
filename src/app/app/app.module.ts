import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { HomeModule } from '../home/home.module';
import { ReservationModule } from '../reservation/reservation.module';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ReservationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
