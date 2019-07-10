import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateUserGuard } from '../guards/canactivate-user/canactivate-user.guard';
import { LoginComponent } from '../pages/login/login.component';
import { MessagesComponent } from '../pages/messages/messages.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'messages', component: MessagesComponent, canActivate: [CanactivateUserGuard] },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
