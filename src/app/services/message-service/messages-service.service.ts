import { Injectable } from '@angular/core';
import { MessageType } from './messages-type';
import { IMessage } from './messages-type';
import { Text } from '@angular/compiler';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

 
export class MessagesService {
  private subject$ = new BehaviorSubject<IMessage[]>([])
  public messages$ = this.subject$.asObservable()
  private nextId: number = 0

  getMessage(): IMessage[] {
    return this.subject$.getValue()
  }

  private addMessage(message: Omit<IMessage, 'id'>) {
    const m = {
      id: ++this.nextId,
      ...message
    }
    
    setTimeout(() => {
      this.closeMessage(m.id)
    }, 5000)
    const updated = [...this.subject$.getValue(), m]
    this.subject$.next(updated)
  }
  closeMessage(id: number) {
    const filtered = this.subject$.getValue().filter(e => id !== e.id);

    this.subject$.next(filtered)
  }

  showWarn(text: string) {
    this.addMessage({
      type: MessageType.WARNING,
      text: text
    })
  }

  showError(text: string) {
    this.addMessage({
      type: MessageType.ERROR,
      text: text
    })
  }

  showSuccess(text: string) {
    this.addMessage({
      type: MessageType.SUCCESS,
      text: text
    })
  }

  showInfo(text: string) {
    this.addMessage({
      type: MessageType.INFO,
      text: text
    })
  }
}

