import { Component } from '@angular/core';
import  './training';
import { Color } from '../enums/Colors'; 
import './collection'


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})

export class AppComponent {
  constructor () {
    this.getDate()
    this.count()
  }

  nameCompany = "Румтибет"

  getColor (color: Color) {
    if (color === Color.red || color === Color.blue || color === Color.green) {
      return true
    } else {
      return false
    }
  }

  getDate():void {
     const currentDate = new Date()
     localStorage.setItem('last visit', currentDate.toString())
  }

  count():void {
    const visitCount = Number(localStorage.getItem('visit-count') || 0);
    localStorage.setItem('visit-count', (visitCount + 1).toString());   
  }
}

