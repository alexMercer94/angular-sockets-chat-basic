import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from '../../providers/chat/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  text = '';
  messagesSubscription: Subscription;
  element: HTMLElement;
  messages: any[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.element = document.getElementById('chat-mensajes');

    this.messagesSubscription = this.chatService.getMessages().subscribe(msg => {
      this.messages.push(msg);
      setTimeout(() => {
        this.element.scrollTop = this.element.scrollHeight;
      }, 50);
    });
  }

  ngOnDestroy() {
    this.messagesSubscription.unsubscribe();
  }

  /**
   * Send message to server
   */
  send(): void {
    if (this.text.trim().length === 0) {
      return;
    }

    this.chatService.sendMessage(this.text);
    this.text = '';
  }
}
