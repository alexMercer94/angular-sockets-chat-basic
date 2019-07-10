import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public socketStatus = false;
  public user: User;

  constructor(private socket: Socket) {
    this.loadFromStorage();
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

  /**
   * Enter in aplication
   * @param name User's name
   */
  loginWS(name: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.emit('set-user', { name }, res => {
        this.user = new User(name);
        this.saveInStorage();
        resolve();
      });
    });
  }

  /**
   * Save data in LocalStorage
   */
  saveInStorage(): void {
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  /**
   * Load data from LocalStorage
   */
  loadFromStorage() {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.loginWS(this.user.name);
    }
  }

  /**
   * Get user
   */
  getUser(): User {
    return this.user;
  }
}
