import {Component, Input} from '@angular/core';
import {HouseService} from "../../services/house.service";

@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.css']
})
export class CreateHouseComponent {
  house= {
    city:'',
    area:'',
    price:'',
    street:''
  };

  constructor(private houseService:HouseService){

  }

  createHouse(){
    console.log(22);
    this.houseService.createHouse(this.house)
      .subscribe(resp => {
        console.log(resp);
      })
  }
}

