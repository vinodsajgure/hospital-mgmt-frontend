import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {

  ngOnInit(){
    this.getPatients();
  }

  patients:Patient[]=[];
  constructor(private patientService:PatientService){}
  
    getPatients(){

      this.patientService.getPatientList().subscribe(data=>{
      this.patients=data;
      })

    }

    delete(id:number){
      this.patientService.deletePatient(id).subscribe(data=>{
        console.log(data)
        this.getPatients();
      })
    }
  
}
