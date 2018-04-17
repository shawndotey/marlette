import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User} from './user.model';
import { setTimeout } from 'timers';

@Injectable()
export class UserService {

  userMockData: User[];
  constructor()
  {
    this.userMockData = [
      { firstName: "Shawn", lastName: "Dotey", id: 1 },
      { firstName: "John  ", lastName: "Doe", id: 2 },
      { firstName: "Jane", lastName: "Doe", id: 3 }
    ];

  }

  

  getUsers():Observable<User[]>
  {
    return Observable.create((observer) =>
    {
      observer.next(this.userMockData);
      setTimeout(() =>
      {
        observer.next(this.userMockData.concat([{ firstName: "New", lastName: "User", id: 4 }]));

      }, 1500);
    });
  }
}
