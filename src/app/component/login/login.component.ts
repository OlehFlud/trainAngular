import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor() { }
  infoAboutUser: any;
  users =[
    {name: 'Oleh', password: 456,email:'Oleh4@gmail.com', is_blocked: true},
    {name: 'Andriy', password: 4578,email:'Andriy4@gmail.com', is_blocked: false},
    {name: 'Nazar', password: 896,email:'Nazar4@gmail.com', is_blocked: true},
    {name: 'Iwan',  password: 'asdadsd',email:'Iwan4@gmail.com', is_blocked: true},
  ];

  findUser = {
    email: '',
    password: ''
  };

  loginUser() {
    const User = this.users.find(user =>
      this.findUser.password === user.password);
    User ? this.infoAboutUser=alert('welcome') :this.infoAboutUser=alert('User is not found');
    return User;
  }

  @Input() Login;

}
