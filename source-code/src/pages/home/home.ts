import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {S3Manager} from '../../providers/s3-manager';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers : [S3Manager]

})
export class HomePage {

  constructor(public navCtrl: NavController, public s3Object:S3Manager) {

    //let s3Object:S3Manager;

    s3Object.s3Setup();
    
    }
}
