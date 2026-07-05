import { Injectable } from '@angular/core';
import { MessageType } from './messages-type';
import { IMessage } from './messages-type';
import { Text } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private messagesArray: IMessage[] = [];
  private nextId: number = 0;

  getMessage (): IMessage[] {
    return this.messagesArray
  }

  private addMessage(message: Omit<IMessage, 'id'>) {
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

  showWarn(text: string){
    this.addMessage({
      type: MessageType.WARNING,
      text: text
    })
  }

  showError(text: string){
    this.addMessage({
      type: MessageType.ERROR,
      text: text
    })
  }

  showSuccess(text: string){
    this.addMessage({
      type: MessageType.SUCCESS,
      text: text
    })
  }

  showInfo(text: string){
    this.addMessage({
      type: MessageType.INFO,
      text: text
    })
  }

}

