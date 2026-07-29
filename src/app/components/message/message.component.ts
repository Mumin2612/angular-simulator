import { Component, inject } from '@angular/core';
import { MessagesService } from '../../services/message-service/messages-service.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-message',
  imports: [AsyncPipe],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {
 public messagesService = inject(MessagesService)

 activateMessages$ = this.messagesService.messages$
}
