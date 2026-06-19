import { Component, inject } from '@angular/core';
import { MessagesService } from '../../services/message-service/messages-service.service';

@Component({
  selector: 'app-message',
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {
  messagesServices = inject(MessagesService)
  get messagesList() { 
   return this.messagesServices.getMessage()
  }
}
