import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componenet/login/login.component';
import { RegisterComponent } from './componenet/register/register.component';
import { HeaderComponent } from './componenet/header/header.component';
import { FooterComponent } from './componenet/footer/footer.component';
import { BlockComponent } from './componenet/block/block.component';
import { ChangepasswordComponent } from './componenet/changepassword/changepassword.component';
import { ChatComponent } from './componenet/chat/chat.component';
import { ContactusComponent } from './componenet/contactus/contactus.component';
import { FavoriteComponent } from './componenet/favorite/favorite.component';
import { HomeComponent } from './componenet/home/home.component';
import { MiniprofileComponent } from './componenet/miniprofile/miniprofile.component';
import { MyprofileComponent } from './componenet/myprofile/myprofile.component';
import { ProfileComponent } from './componenet/profile/profile.component';
import { SearchComponent } from './componenet/search/search.component';
import { ForgotpasswordComponent } from './componenet/forgotpassword/forgotpassword.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    BlockComponent,
    ChangepasswordComponent,
    ChatComponent,
    ContactusComponent,
    FavoriteComponent,
    HomeComponent,
    MiniprofileComponent,
    MyprofileComponent,
    ProfileComponent,
    SearchComponent,
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule ,
   MatSnackBarModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
