import { Component, inject } from '@angular/core';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { NgIf } from '@angular/common';
import { UserComponent } from '../user/user.component';
import { FirebaseServiceService } from '../firebase.service';
import { Firestore, collection, doc, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    MatProgressBarModule,
    NgIf,
    UserComponent,
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
})
export class DialogAddUserComponent {
  constructor(
    public userService: FirebaseServiceService,
    public dialogRef: MatDialogRef<DialogAddUserComponent>
  ) {}

  saveUser() {
    this.userService.saveUserService();
    this.dialogRef.close();
    this.userService.getData();
  }
}
