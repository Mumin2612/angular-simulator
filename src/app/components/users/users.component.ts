import { Component, inject, OnInit } from '@angular/core';
import { UserApiService } from '../../services/user-api/user-api.service';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user/user.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [AsyncPipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
 private userService = inject(UserService)  
 public users$!: Observable<any>

 ngOnInit(){
  this.users$ = this.userService.loaderUsers()
 }
}
