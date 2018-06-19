import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBSnCzi83-Lm3fJ6gHh_lZZ-Qlam8Vszd0",
      authDomain: "ng-recipe-book-47db1.firebaseapp.com"
    });
  }
  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }
}