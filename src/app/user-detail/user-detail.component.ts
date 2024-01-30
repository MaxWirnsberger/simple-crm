import { Component, inject } from '@angular/core';
import {
  Firestore,
  collection,
  doc,
  onSnapshot,
} from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.class';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';


@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatMenuModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent {
  firestore: Firestore = inject(Firestore);
  userId: any;
  user: User = new User();
  UserList;
  constructor(private route: ActivatedRoute, public dialog: MatDialog) {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.UserList = this.getUserForList();
  }

  ngOnDestroy() {
    this.UserList();
  }

  getSingleRef() {
    return doc(collection(this.firestore, 'users'), this.userId);
  }

  getUserForList() {
    return onSnapshot(this.getSingleRef(), (element) => {
      this.user = new User(element.data());
    });
  }

  openChangesDialog() {
    // Ist MEGA WICHTIG!!!!! - So kann ich Daten an eine andere Component übergeben.
    let dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }
}
