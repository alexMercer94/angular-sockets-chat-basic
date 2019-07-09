import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { ChatComponent } from '../components/chat/chat.component';
import { FooterComponent } from '../components/footer/footer.component';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

const config: SocketIoConfig = { url: environment.wsURL, options: {} };

@NgModule({
  declarations: [AppComponent, FooterComponent, ChatComponent],
  imports: [BrowserModule, SocketIoModule.forRoot(config), FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
