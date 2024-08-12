import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-docdashboard',
  templateUrl: './docdashboard.component.html',
  styleUrl: './docdashboard.component.css'
})
export class DocdashboardComponent {

constructor(private patientService:PatientService,private router:Router){}

ngOnInit():void{
  this.getPatients();
}

patients:Patient[]=[];

getPatients(){
this.patientService.getPatientList().subscribe(data=>{
  this.patients=data;
})
}

update(id:number){
  console.log("update called");
  this.router.navigate(['update-patient',id])
}

delete(id:number){
  this.patientService.deletePatient(id).subscribe(data=>{
    console.log(data);
    this.getPatients();
  })
}

view(id:number){
  this.router.navigate(['/view-patient',id]);
}

}
