import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public socketStatus = false;

  constructor(private socket: Socket) {
    this.checkStatus();
  }

  /**
   * Verify the Server's status
   */
  checkStatus(): void {
    this.socket.on('connect', () => {
      console.log('Connected to Server');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected of Server');
      this.socketStatus = false;
    });
  }

  /**
   * Emit an event to server
   * @param event Event's name to emit
   * @param payload  Data to send
   * @param callback Function to execute after emit
   */
  // tslint:disable-next-line: ban-types
  emit(event: string, payload?: any, callback?: Function): void {
    console.log('Emiting: ', event);

    this.socket.emit(event, payload, callback);
  }

  /**
   * Listen any event from server
   * @param event Event from server
   */
  listen(event: string): Observable<any> {
    return this.socket.fromEvent(event);
  }
}
