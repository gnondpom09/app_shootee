import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FilterPage } from '../filter/filter';
import { ChatsPage } from '../chats/chats';
import { AccountPage } from '../account/account';
import { UsersPage } from '../users/users';

@Component({
	selector: 'tabs-page',
	templateUrl: 'tabs.html'
})
export class TabsPage {
		//filter = FilterPage;
		users : any = UsersPage;
	  chats : any = ChatsPage;
    profile : any = AccountPage;

		myIndex : number;

		constructor(navParams: NavParams) {
			// Set the active tab based on the passed index from menu.ts
			this.myIndex = navParams.data.tabIndex || 0;
		}
}
