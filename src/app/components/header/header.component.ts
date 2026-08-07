import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-header',
  imports: [NgIf, RouterLink, RouterLinkActive, FontAwesomeModule, AsyncPipe, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public nameCompany = "Румтибет";
  public time: string = '';
  public counter: number = 0;
  public showTime: boolean = false;
  public themeService = inject(ThemeService)
  public faSun = faSun; 
  public faMoon = faMoon
  

  public menuItem = [
    { title: 'Главная', path: '' },
    { title: 'Пользователи', path: 'users' },
    { title: 'Программа тура', path: 'program' },
    { title: 'Стоимость', path: 'price' },
    { title: 'Блог', path: 'blog' },
    { title: 'Контакты', path: 'contacts' },
  ]
}
