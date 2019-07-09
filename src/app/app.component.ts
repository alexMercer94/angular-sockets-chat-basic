import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../providers/websocket/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'basic';

  constructor(private webSocketService: WebsocketService) {}

  ngOnInit() {}
}
