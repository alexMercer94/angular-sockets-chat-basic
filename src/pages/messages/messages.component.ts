import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../providers/websocket/websocket.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  constructor(public wsService: WebsocketService) {}

  ngOnInit() {}

  /**
   * End user's session
   */
  logout() {
    this.wsService.logoutWS();
  }
}
