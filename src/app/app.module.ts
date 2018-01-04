import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { MyApp } from './app.component';

import { MenuPage } from '../pages/menu/menu';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { UsersPage } from '../pages/users/users';
import { ChatsPage } from '../pages/chats/chats';
import { AccountPage } from '../pages/account/account';
import { ChatViewPage } from '../pages/chat-view/chat-view';
import { FilterPage } from '../pages/filter/filter';
import { ProjectsPage } from '../pages/projects/projects';
import { ModelsPage } from '../pages/models/models';
import { BiographyPage } from '../pages/biography/biography';
import { BookPage } from '../pages/book/book';
import { CommentPage } from '../pages/comment/comment';
import { ModalsPage } from '../pages/modals/modals';

import { AuthProvider } from '../providers/auth-provider/auth-provider';
import { ChatsProvider } from '../providers/chats-provider/chats-provider';
import { UserProvider } from '../providers/user-provider/user-provider';
import { UtilProvider } from '../providers/utils';

export const firebaseConfig = {
  apiKey: "AIzaSyDdOzvQzkpRB52K-f3UQZdhs8I00p3Hj8o",
  authDomain: "login-shootee.firebaseapp.com",
  databaseURL: "https://login-shootee.firebaseio.com",
  storageBucket: "login-shootee.appspot.com",
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    MyApp,
    MenuPage,
    TabsPage,
    LoginPage,
    RegisterPage,
    UsersPage,
    ChatsPage,
    AccountPage,
    ChatViewPage,
    FilterPage,
    ProjectsPage,
    ModelsPage,
    BiographyPage,
    BookPage,
    CommentPage,
    ModalsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuPage,
    TabsPage,
    LoginPage,
    RegisterPage,
    UsersPage,
    ChatsPage,
    AccountPage,
    ChatViewPage,
    FilterPage,
    ProjectsPage,
    ModelsPage,
    BiographyPage,
    BookPage,
    CommentPage,
    ModalsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
  AuthProvider, ChatsProvider, UserProvider, UtilProvider, Storage]
})
export class AppModule {}
