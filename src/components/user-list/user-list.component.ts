import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from '../../providers/chat/chat.service';
import { WebsocketService } from '../../providers/websocket/websocket.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  activeUsersObs: Observable<any>;

  constructor(private chatService: ChatService, private wsService: WebsocketService) {}

  ngOnInit() {
    this.activeUsersObs = this.chatService.getActiveUsers();

    this.wsService.emit('active-users');

    // Emitir el `get-users`
    this.chatService.emitActiveUsers();
  }
}
