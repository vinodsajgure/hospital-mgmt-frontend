import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrl: './create-medicine.component.css'
})
export class CreateMedicineComponent {

medicine:Medicine=new Medicine();  

constructor(private medicineService:MedicineService, private router:Router){}


saveMedicine(){
this.medicineService.saveMedicines(this.medicine).subscribe(data=>{
  console.log(data);
  this.redirectToMedicines();
})

}

onSubmit(){
  this.saveMedicine();
  
}

redirectToMedicines(){
  this.router.navigate(['/view-medicine'])
}


}
