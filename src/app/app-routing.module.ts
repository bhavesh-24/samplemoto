import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikelistComponent } from './components/bikelist/bikelist.component';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { HomeComponent } from './components/home/home.component';
import { SupportComponent } from './components/support/support.component';

const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'popularbikes', component: BikelistComponent},
  {path: 'bookconsultation', component: ConsultationComponent},  
  {path: 'support', component: SupportComponent},
  {path: '*', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
