import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
 public usersItem = [
  {id: 1, name: 'Mumin', age: 20, isAdmin: true},
  {id: 2, name: 'Isa', age: 21, isAdmin: false},
  {id: 3, name: 'Abdurahman', age: 22, isAdmin: false},
  {id: 4, name: 'Ismail', age: 23, isAdmin: false}
 ]
}
