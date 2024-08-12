import { Component, createPlatform, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { CreateappointmentComponent } from './createappointment/createappointment.component';
import { DocdashboardComponent } from './docdashboard/docdashboard.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';

const routes: Routes = [
  {path:'admin',component:AdmindashboardComponent},
  {path:'appointmentlist',component:AppointmentComponent},
  {path:'create-appointment',component:CreateappointmentComponent},
  {path:'home',component:HomepageComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'docdashboard',component:DocdashboardComponent},
  {path:'create-patient',component:CreatePatientComponent},
  {path:'view-medicine',component:MedicinelistComponent},
  {path:'create-medicine',component:CreateMedicineComponent},
  {path:'update-patient/:id',component:UpdatePatientComponent},
  {path:'view-patient/:id',component:ViewPatientComponent},
  {path:'doctor-login',component:DoctorloginComponent},    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
