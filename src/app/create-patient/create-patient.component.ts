import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrl: './create-patient.component.css'
})
export class CreatePatientComponent {

patient:Patient=new Patient();

constructor(private patirntService:PatientService,private router:Router){}

savePatient(){
  this.patirntService.createPatient(this.patient).subscribe(data=>{
    console.log(data);
    this.redirectToPatientList();
  })
}

redirectToPatientList(){
  this.router.navigate(['/docdashboard'])
}

onSubmit(){
  this.savePatient();
}
}
