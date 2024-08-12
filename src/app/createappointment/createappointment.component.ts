import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-createappointment',
  templateUrl: './createappointment.component.html',
  styleUrl: './createappointment.component.css'
})
export class CreateappointmentComponent {

  appointment: Appointment= new Appointment();

  constructor(private appointmentService: AppointmentService,private router: Router){}

  saveAppointment(){
    this.appointmentService.createAppointment(this.appointment).subscribe(data=>{

      console.log(data);
      this.redirectToAppointment();
    });
  }

  onSubmit(){
    this.saveAppointment();
  }

  redirectToAppointment(){
    this.router.navigate(['/appointmentlist'])
  }

}
