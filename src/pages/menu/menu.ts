import { UsersPage } from '../users/users';
import { ChatsPage } from '../chats/chats';
import { AccountPage } from '../account/account';
import { TabsPage } from '../tabs/tabs';
import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  // Basic root for our content view
  rootPage: any = UsersPage;

  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  pages: Array<{title: string, component: any}>;

  constructor() {

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: UsersPage },

      { title: 'Account', component: AccountPage }
    ];

  }

  // Methodes
  openPage(pages) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(pages.component);
  }


}
