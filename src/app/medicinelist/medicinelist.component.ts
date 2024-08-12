import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-medicinelist',
  templateUrl: './medicinelist.component.html',
  styleUrl: './medicinelist.component.css'
})
export class MedicinelistComponent {

medicines:Medicine[]=[];

constructor(private medicineService:MedicineService){}

ngOnInit():void{
this.getMedicine();
}

getMedicine(){
this.medicineService.getMedicines().subscribe(data=>{
  this.medicines=data;
})
}

}
