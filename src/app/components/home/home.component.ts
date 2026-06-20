import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlogCards } from '../../../interfaces/blog-cards';
import { ProductCards } from '../../../interfaces/popular-cards';
import { MessagesService } from '../../services/message-service/messages-service.service';

@Component({
  selector: 'app-home',
  imports: [FormsModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public messageService: MessagesService = inject(MessagesService);
  public location: string = '';
  public data: string = '';
  public name: string = '';

  public popularCards: ProductCards[] = [
    {
      id: 1,
      img: '/images/mountain-lake.svg',
      title: 'Озеро возле гор',
      desc: 'романтическое приключение',
      price: 480,
      rating: 4.9
    },
    {
      id: 2,
      img: '/images/mountain-night.svg',
      title: 'Ночь в горах',
      desc: 'в компании друзей',
      price: 500,
      rating: 4.5
    },
    {
      id: 3,
      img: '/images/mountain-stretch_blurred.svg',
      title: 'Растяжка в горах',
      desc: 'для тех, кто забоится о себе',
      price: 230,
      rating: 5
    } 
  ]
public blogCards: BlogCards[] = [
  {
    id: 1,
    img: '/images/italy.svg',
    title: 'Красивая Италия, какая она в реальности?',
    desc: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
  },
  {
    id: 2,
    img: '/images/plane-sky.svg',
    title: 'Долой сомнения! Весь мир открыт для вас!',
    desc: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих...',
  },
  {
    id: 3,
    img: '/images/lone-travel.svg',
    title: 'Как подготовиться к путешествию в одиночку? ',
    desc: 'Для современного мира базовый вектор развития предполагает..',
  },
  {
    id: 4,
    img: '/images/india.svg',
    title: 'Индия ... летим?',
    desc: 'Для современного мира базовый.',
  }
]

  advantages = [
    {
      icon: '/images/guide-icon.svg',
      alt: 'icon-guid',
      title: 'Опытный гид',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    },
     {
      icon: '/images/security-icon.svg',
      alt: 'icon-security',
      title: 'Безопасный поход',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    },
     {
      icon: '/images/price-icon.svg',
      alt: 'icon-price',
      title: 'Лояльные цены',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации'
    },
  ]
textValue: any;

  addSuccessMessage() {
    this.messageService.showSuccess('SUCCESS')
  }
}


