import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { ChatComponent } from '../components/chat/chat.component';
import { FooterComponent } from '../components/footer/footer.component';
import { UserListComponent } from '../components/user-list/user-list.component';
import { environment } from '../environments/environment';
import { LoginComponent } from '../pages/login/login.component';
import { MessagesComponent } from '../pages/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const config: SocketIoConfig = { url: environment.wsURL, options: {} };

@NgModule({
  declarations: [AppComponent, FooterComponent, ChatComponent, LoginComponent, UserListComponent, MessagesComponent],
  imports: [BrowserModule, SocketIoModule.forRoot(config), FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
