import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loaderState$ = new BehaviorSubject(false)
  public isLoading$  = this.loaderState$.asObservable()

  showLoader(){ 
    this.loaderState$.next(true)
  }
  
  hideLoader() {
    this.loaderState$.next(false)
  }
}
