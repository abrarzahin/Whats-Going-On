import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
 favoriteActivityList: Observable<any>;

 constructor(
  private _angularFireStore: AngularFirestore,
  private _angularFireAuth: AngularFireAuth,
){
  this.favoriteActivityList = _angularFireStore
    .collection("favorites")
    .doc(_angularFireAuth.auth.currentUser.uid)
    .collection("favorites")
    .valueChanges();
}



}
