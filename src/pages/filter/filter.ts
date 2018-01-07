import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthProvider } from '../../providers/auth-provider/auth-provider';
import { UserProvider } from '../../providers/user-provider/user-provider';

@Component({
  templateUrl: 'filter.html',
})
export class FilterPage {
    uid:string;
    constructor(public nav: NavController, public userProvider: UserProvider) {}

    ngOnInit() {
        this.userProvider.getUid()
        .then(uid => {
            this.uid = uid;
        });
    };
}
