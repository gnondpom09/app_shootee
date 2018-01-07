import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { validateEmail } from '../../validators/email';
import { AuthProvider } from '../../providers/auth-provider/auth-provider';
import { UserProvider } from '../../providers/user-provider/user-provider';
import { UtilProvider } from '../../providers/utils';

@Component({
	templateUrl: 'register.html'
})
export class RegisterPage {
	registerForm:any;
    constructor(public nav:NavController,
      public auth: AuthProvider,
      public userProvider: UserProvider,
      public util: UtilProvider,
      public storage:Storage) {
    }

    ngOnInit() {
        this.registerForm = new FormGroup({
			pseudo: new FormControl(""),
            email: new FormControl("",[Validators.required, validateEmail]),
            password: new FormControl("",Validators.required),
			activity: new FormControl("")
        });
    }

// Create a new user
    createAccount() {

        let credentials = this.registerForm.value;

		this.auth.createAccount(credentials)
		.then((data) => {
		  // Save user datas
		   //this.storage.set('uid', data.uid);
		   this.userProvider.createUser(credentials, data.uid);
		   // Enter in account page
		   this.nav.setRoot(TabsPage);
		}, (error) => {
			let alert = this.util.doAlert("Error",error.message,"Ok");
			alert.present();
		});
    };
}
