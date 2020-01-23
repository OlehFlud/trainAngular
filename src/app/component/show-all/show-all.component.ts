import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent{
  constructor() { }

  index: number = -1;
  users = [
    {name: 'Oleh', password: 456,email:'Oleh4@gmail.com', is_blocked: true},
    {name: 'Andriy', password: 4578,email:'Andriy4@gmail.com', is_blocked: false},
    {name: 'Nazar', password: 896,email:'Nazar4@gmail.com', is_blocked: true},
    {name: 'Iwan',  password: 'asdadsd',email:'Iwan4@gmail.com', is_blocked: true},
  ];
  house = {
    id: 0, street: '', price: 0, owner: this.users[Math.floor(Math.random()*this.users.length)]
  };

  houses = [
    {id: 0, price: 798, street: 'naukova', owner: this.users[0]},
    {id: 1, price: 788, street: 'naukova', owner: this.users[1]},
    {id: 2, price: 44554, street: 'naukova', owner: this.users[2]},
    {id: 3, price: 798, street: 'naukova', owner: this.users[3]},
  ];

  @Input() ShowAll;

  ShowAllBtn(id: number) {
    this.index = id;
  }

}
