import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebsocketService } from '../websocket/websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private wsService: WebsocketService) {}

  sendMessage(message: string) {
    const payload = {
      from: 'Mercer',
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
}
