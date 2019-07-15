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
  getPrivateMessages(): Observable<any> {
    return this.wsService.listen('private-message');
  }

  /**
   * Listen sockets `active-users` from server
   */
  getActiveUsers(): Observable<any> {
    return this.wsService.listen('active-users');
  }

  emitActiveUsers() {
    this.wsService.emit('get-users');
  }
}
