import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/user.service';
import { User } from './shared/user.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements OnInit {

  constructor() { }
  userService: UserService;
  users: Observable<User[]>;
  ngOnInit()
  {
    this.userService = new UserService();
    this.getUsers();
  }
  getUsers(): void
  {

    this.users = this.userService.getUsers();
     
  }
}
