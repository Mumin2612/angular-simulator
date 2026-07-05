import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NgIf, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public nameCompany = "Румтибет";
  public time: string = '';
  public counter: number = 0;
  public showTime: boolean = false;

  public menuItem = [
    { title: 'Главная', path: '' },
    { title: 'Пользователи', path: 'users' },
    { title: 'Программа тура', path: 'program' },
    { title: 'Стоимость', path: 'price' },
    { title: 'Блог', path: 'blog' },
    { title: 'Контакты', path: 'contacts' },
  ]
}
