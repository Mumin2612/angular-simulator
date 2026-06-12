import { Injectable } from '@angular/core';
import { MessageType } from './messages-type';
import { IMessage } from './messages-type';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  public messagesArray: IMessage[] = [];
  private nextId: number = 0;

  addMessage(message: Omit<IMessage, 'id'>) {
    const m = {
      id: ++this.nextId,
      ...message
    }
    this.messagesArray.unshift(m)
    setTimeout(() => {
      this.closeMessage(m.id)
    }, 5000)
  }
  closeMessage(id: number) {
    this.messagesArray = this.messagesArray.filter(e => id !== e.id
    );
  }
}
