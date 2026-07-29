import { Component, inject, OnInit, DestroyRef } from '@angular/core';
import { UserApiService } from '../../services/user-api/user-api.service';
import { BehaviorSubject, combineLatest, Observable, map } from 'rxjs';
import { UserService } from '../../services/user/user.service';
import { AsyncPipe } from '@angular/common';
import { UserCardComponent } from '../user-card/user-card.component';
import { UserCreateComponent } from '../user-create/user-create.component';
import { UsersFilterComponent } from '../users-filter/users-filter.component'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-users',
  imports: [AsyncPipe, UserCardComponent, UserCreateComponent, UsersFilterComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  private userService = inject(UserService)
  public users$!: Observable<any>
  private searchQuery$ = new BehaviorSubject<string>('')
  public filteredUsers$!: Observable<any[]>;
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.users$ = this.userService.user$
    this.userService.loaderUsers().subscribe()

    this.filteredUsers$ = combineLatest([
      this.userService.user$,
      this.searchQuery$
    ]).pipe(
      map(([users, query]) => {
        const cleanQuery = query.trim().toLowerCase();

        if (!cleanQuery) {
          return users;
        }
        return users.filter(user =>
          user.name.toLowerCase().trim().includes(cleanQuery)
        );
      })
    );
  }

  deletUser(userId: number) {
    if (userId) {
      const allUsers = this.userService.getUsers()
      const updateUsers = allUsers.filter(u => u.id !== userId)
      this.userService.setUsers(updateUsers)
    }
  }

  onFilterChange(searchTerm: string | null): void {
    this.searchQuery$.next(searchTerm ?? '')
  }


  addUser(newUser: any) {
    const oldUsers = this.userService.getUsers()

    const updateList = [...oldUsers, newUser]

    this.userService.setUsers(updateList)
  }
}
