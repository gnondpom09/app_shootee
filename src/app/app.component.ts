import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { AngularFire } from 'angularfire2';
import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
import { TabsPage } from '../pages/tabs/tabs';
import { AuthProvider } from '../providers/auth-provider/auth-provider';

import { UsersPage } from '../pages/users/users';
import { ChatsPage } from '../pages/chat/chat';
import { AccountPage } from '../pages/acount/account';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform, public af: AngularFire, public authProvider:AuthProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.intialize();

    });
  }

  intialize() {
    this.af.auth.subscribe(auth => {
       if(auth) {
          this.rootPage = TabsPage;
        } else {
          this.rootPage = LoginPage;
        }
    });
  }
}
