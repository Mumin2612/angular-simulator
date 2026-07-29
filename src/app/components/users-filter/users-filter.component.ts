import { Component, OnInit, Output, EventEmitter, inject, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-users-filter',
  imports: [ReactiveFormsModule],
  templateUrl: './users-filter.component.html',
  styleUrl: './users-filter.component.scss',
})
export class UsersFilterComponent implements OnInit {
  @Output() onFilter = new EventEmitter<string | null>()
  filterUsers = new FormControl('')
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.filterUsers.valueChanges
      .pipe(
        debounceTime(200),
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(value => {
        this.onFilter.emit(value)
      })
  }
}
