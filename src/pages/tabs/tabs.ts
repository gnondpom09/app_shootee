import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FilterPage } from '../filter/filter';
import { ModalsPage } from '../modals/modals';
import { ChatsPage } from '../chats/chats';
import { AccountPage } from '../account/account';
import { UsersPage } from '../users/users';

@Component({
	selector: 'tabs-page',
	templateUrl: 'tabs.html'
})
export class TabsPage {
	profile : any = AccountPage;
	filter: any = FilterPage;
	users : any = UsersPage;
	modals: any = ModalsPage;
	chats : any = ChatsPage;

}
