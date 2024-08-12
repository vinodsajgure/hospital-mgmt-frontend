import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrl: './update-patient.component.css'
})
export class UpdatePatientComponent {

  constructor(private routes: ActivatedRoute, private patientService: PatientService,private router:Router) { }
  id: number = 0;
  patient: Patient = new Patient();

  ngOnInit(): void {
    this.id = this.routes.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(data => {
      this.patient = data;
    })
  }

  redirectToDocdashboard(){
    this.router.navigate(['/docdashboard']); 
  }

  onSubmit() {
    this.patientService.updatePatientById(this.id, this.patient).subscribe(data => {
      console.log(data);
      this.redirectToDocdashboard();
    })
  }
}
