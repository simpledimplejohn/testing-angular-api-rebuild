import { ClientMessage } from './../../models/client-message';
import { User, Address} from './../../models/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  title = "Register User"
  public user = new User(0,'','','','','',[])
  public address = new Address('','','','','')
  public clientMessage = new ClientMessage('') //alow an alert to the user wether register is

  constructor(private userSevice: UserService) { }

  public registerUser(): void {
    //push the address object into the array
    this.user.addresses.push(this.address);
    this.userSevice.registerUser(this.user)
      .subscribe(
        data => this.userSevice.logger.log(data),
        error => this.userSevice.logger.error(error)
        )
  }

  getData(data:NgForm)
  {
    console.warn(data)
  }


  // ngOnInit(): void {
  // } dont need this we do nothing on init

}
