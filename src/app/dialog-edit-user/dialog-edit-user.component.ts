import { Component } from '@angular/core';
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
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../../models/user.class';
import { FirebaseServiceService } from '../firebase.service';
import { MatNativeDateModule } from '@angular/material/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [ MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    MatProgressBarModule,
    MatNativeDateModule,
    NgIf],
    
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})

export class DialogEditUserComponent {
  user!: User;
  userId!:string;

  constructor(public userService: FirebaseServiceService, public dialogRef: MatDialogRef<DialogEditUserComponent>){}

  updateUser(){
    this.userService.updateUserService(this.user, this.userId);
    this.dialogRef.close()
  }
}
