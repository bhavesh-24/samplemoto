import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { BikelistComponent } from './components/bikelist/bikelist.component';
import { BikeComponent } from './components/bike/bike.component';
import { RiderlistComponent } from './components/riderlist/riderlist.component';
import { SupportComponent } from './components/support/support.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConsultationComponent,
    BikelistComponent,
    BikeComponent,
    RiderlistComponent,
    SupportComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
