import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../providers/user-service/user-service';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-two',
  templateUrl: 'page2.html'
})
export class Page2 {
    private user: any;
    private nav: any;

  constructor(public navCtrl: NavController, user: UserService, nav: NavController){
    console.log(user.name);
    this.user = user;
    this.nav = nav;
  }

  goToPage1(){
    this.nav.push(HomePage);
  }

}
