import { Component, inject } from '@angular/core';
import './training';
import { Color } from '../enums/Colors';
import './collection'
import { Data, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import { ProductCards } from '../interfaces/popular-cards';
import { BlogCards } from '../interfaces/blog-cards';
import { MessagesService } from './services/message-service/messages-service.service';
import { Injectable } from '@angular/core';
import { MessageType } from './services/message-service/messages-type';
import { LocalStorageService } from './services/localstorage-service/localstroge-service.service'
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MessageComponent } from './components/message/message.component';



@Component({ 
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgIf, NgTemplateOutlet, HomeComponent, HeaderComponent, UsersComponent,FooterComponent, MessageComponent, NotFoundComponent, RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',  
})

export class AppComponent {
  public messageService: MessagesService = inject(MessagesService);
  private LocalStorageService = inject(LocalStorageService)
  public nameCompany = "Румтибет";
  public counter: number = 0;
  public switch: boolean = true;
  public showTime: boolean = false;
  public textValue: string = '';
  public isLoading: boolean = true;
  public time: string = '';

  constructor() {
    this.getDate()
    this.count()
    this.time = this.time

    setInterval(() => {
      this.time = new Date().toLocaleString()
    }, 1000)

    setTimeout(() => {
      this.isLoading = false
    }, 2000)
  }

  private getColor(color: Color) {
    if (color === Color.red || color === Color.blue || color === Color.green) {
      return true
    } else {
      return false
    }
  }

  private getDate(): void {
    const currentDate = new Date()
    this.LocalStorageService.set('last visit', currentDate.toString())
  }

  private count(): void {
    const visitCount = Number(this.LocalStorageService.get('visit-count') || 0);
    this.LocalStorageService.set('visit-count', (visitCount + 1).toString());
  }


  addInfoMessage() {
    this.messageService.showInfo('INFO')
  }
  addWarningMessage() {
    this.messageService.showWarn("WARNING")
  }
  addErrorMessage() {
  this.messageService.showError ("ERROR")
  }
}

