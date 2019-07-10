import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebsocketService } from '../websocket/websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private wsService: WebsocketService) {}

  /**
   * Sens a message to server
   * @param message Message to send to server
   */
  sendMessage(message: string): void {
    const payload = {
      from: this.wsService.getUser().name,
      message
    };

    this.wsService.emit('message', payload);
  }

  /**
   * Listen socket `new-message` from server
   */
  getMessages(): Observable<any> {
    return this.wsService.listen('new-message');
  }

  /**
   * Listen socket `private-message` from server
   */
  getPrivateMessages() {
    return this.wsService.listen('private-message');
  }
}
