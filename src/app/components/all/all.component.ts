import { LoggerService } from './../../services/logger.service';
import { UserService } from './../../services/user.service';
import { ClientMessage } from './../../models/client-message';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  title = "all users"
  public users: User[] = []
  public clientMessage: ClientMessage = new ClientMessage('Sorry no users to display')


  // where we will inject an HttpClient module here
  constructor(private userService: UserService) { }

  ngOnInit(): void { //lifecycle hook in a components lifecycle
    // when the compoenent is initialized, poplulate the users arrya with all the users in the db
    this.findAllUsers(); //calls method bellow
    console.log(this.users)

  }
  findAllUsers() {
    // calling a method from the userservice that will return an Observable
    this.userService.findAllUsers()
      .subscribe(data => this.users = data) // must subscribe to an observable, then set it to the array
  }

}
