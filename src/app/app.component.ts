import { Component, OnInit } from '@angular/core';
import { ChatService } from '../providers/chat/chat.service';
import { WebsocketService } from '../providers/websocket/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'basic';

  constructor(private webSocketService: WebsocketService, private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.getPrivateMessages().subscribe(msg => {
      console.log(msg);
    });
  }
}
