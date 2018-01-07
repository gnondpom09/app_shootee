import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthProvider } from '../../providers/auth-provider/auth-provider';
import { UserProvider } from '../../providers/user-provider/user-provider';


@Component({
    templateUrl: 'detail-user.html'
})
export class DetailUserPage {
    user = {};
    constructor(public nav: NavController,
                public auth: AuthProvider,
                public userProvider: UserProvider,
                public local:Storage) {
        this.userProvider.getUser()
        .then(userObservable => {
            userObservable.subscribe(user => {
                this.user = user;
            });
        });
    }

    ngOnInit() {

    };

    // Methdes
    openFavorite() {

    }
    pushBook() {

    }
    pushInstagram() {

    }
}
