import { AccountPage } from '../account/account';
import { ProjectsPage } from '../projects/projects';
import { UsersPage } from '../users/users';
import { BookPage } from '../book/book';
import { ChatsPage } from '../chats/chats';
import { TabsPage } from '../tabs/tabs';

import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  // Basic root for our content view
  rootPage: any = TabsPage;

  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  pages: Array<{title: string, component: any}>;

  constructor() {

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Profil', component: AccountPage },
      { title: 'Projets', component: ProjectsPage },
      { title: 'Modeles', component: UsersPage },
      { title: 'Book', component: BookPage },
      { title: 'Messagerie', component: ChatsPage }
    ];

  }

  // Methodes
  openPage(pages) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(pages.component);
  }

}
