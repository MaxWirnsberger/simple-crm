import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  getDocs
} from '@angular/fire/firestore';
import { User } from '../models/user.class';

@Injectable({
  providedIn: 'root',
})

export class FirebaseServiceService {
  loading: boolean = false;
  firestore: Firestore = inject(Firestore);
  user: User = new User();
  birthDate!: Date;
  unsubList: any;
  querySnapshot: any;
  userId: string | any;
  allUsers: UserData[] = [];

  constructor() {}

  saveUserService() {
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime();
    addDoc(collection(this.firestore, 'users'), this.user.toJSON()).then(() => {
      this.loading = false;
    });
  }

  async getData(){
    this.allUsers = [];
    this.querySnapshot = await getDocs(collection(this.firestore, 'users'));
    this.querySnapshot.forEach((user: any) => {
      this.allUsers.push(user.data() as UserData) 
    });
  }
}


interface UserData {
    firstName: string;
    lastName: string;
    birthDate: number;
    street: string;
    zipCode: string;
    city: string;
  }