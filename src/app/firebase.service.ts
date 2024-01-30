import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
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

  async getData() {
    this.allUsers = [];
    this.querySnapshot = await getDocs(collection(this.firestore, 'users'));
    this.querySnapshot.forEach((user: any) => {
      let userData: UserData = user.data();
      userData.id = user.id;
      this.allUsers.push(userData as UserData);
    });
  }

  async updateUserService(editUser: any, editUserId: string) {
    this.loading = true;
    await updateDoc(
      this.getSingleRef(editUserId),
      JSON.parse(JSON.stringify(editUser))
    ).then(() => {
      this.loading = false;
    });
  }

  getSingleRef(editUserId: string) {
    return doc(collection(this.firestore, 'users'), editUserId);
  }
}

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: number;
  street: string;
  zipCode: string;
  city: string;
  id: string;
}
