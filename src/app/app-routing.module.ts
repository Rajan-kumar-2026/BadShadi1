import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BlockComponent } from './componenet/block/block.component';
import { ChangepasswordComponent } from './componenet/changepassword/changepassword.component';
import { ChatComponent } from './componenet/chat/chat.component';
import { ContactusComponent } from './componenet/contactus/contactus.component';
import { FavoriteComponent } from './componenet/favorite/favorite.component';
import { ForgotpasswordComponent } from './componenet/forgotpassword/forgotpassword.component';
import { HomeComponent } from './componenet/home/home.component';
import { LoginComponent } from './componenet/login/login.component';
import { MyprofileComponent } from './componenet/myprofile/myprofile.component';
import { ProfileComponent } from './componenet/profile/profile.component';
import { RegisterComponent } from './componenet/register/register.component';
import { SearchComponent } from './componenet/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'myprofile',
    component: MyprofileComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'profile/:email',
    component: ProfileComponent 
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'blocked',
    component: BlockComponent 
  },
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent
  },
  {
    path: 'favorite',
    component: FavoriteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'contactus',
    component: ContactusComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'changepassword',
    component: ChangepasswordComponent
  },
  {
    path: "**",
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
