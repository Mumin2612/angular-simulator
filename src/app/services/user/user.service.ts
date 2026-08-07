import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, finalize, of, tap } from 'rxjs';
import { UserApiService } from '../user-api/user-api.service';
import { LoaderService } from '../loader/loader.service';
import { MessagesService } from '../message-service/messages-service.service';
import { LocalStorageService } from '../localstorage-service/localstroge-service.service';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userApiService = inject(UserApiService)
  private loaderService = inject(LoaderService)
  private messagesService = inject(MessagesService)
  private localStorageService = inject(LocalStorageService)

  private users$ = new BehaviorSubject<any[]>([])
  public user$ = this.users$.asObservable()

  setUsers(users: any[]) {
    this.users$.next(users)
    this.localStorageService.set('users', users)
  }
  getUsers() {
    return this.users$.getValue()
  }

  loaderUsers() {
    const localStorageUser = this.localStorageService.get<any[]>('users')
    if (localStorageUser) {
      this.setUsers(localStorageUser)
      return of(localStorageUser)
    } else {
      this.loaderService.showLoader()
      return this.userApiService.getUsers().pipe(
        tap(users => {
          this.setUsers(users)
        }),
        catchError((err) => {
          this.messagesService.showError('Ошибка загрузки пользователей')
          return of([])
        }),
        finalize(() => {
          this.loaderService.hideLoader()
        })
      )
    }

  }
}
