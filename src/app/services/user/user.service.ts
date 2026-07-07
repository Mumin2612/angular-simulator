import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, finalize, of } from 'rxjs';
import { UserApiService } from '../user-api/user-api.service';
import { LoaderService } from '../loader/loader.service';
import { MessagesService } from '../message-service/messages-service.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userApiService = inject(UserApiService)
  private loaderService = inject(LoaderService)
  private messagesService = inject(MessagesService)
  


  private users$ = new BehaviorSubject<any[]>([])
  public user$ = this.users$.asObservable()

  setUsers(users: any[]){
    this.users$.next(users)
  }

  getUsers() {
   return this.users$.getValue()
  }

  loaderUsers() {
    this.loaderService.showLoader()
    return this.userApiService.getUsers().pipe(
      catchError((err)=> {
        this.messagesService.showInfo('lalaalal' as any)
        return of([])
      }),
      finalize(() => {
        this.loaderService.hideLoader()
      })
    )

    
  }
 
}
