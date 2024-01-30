import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';
import { FirebaseServiceService } from '../firebase.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatCardModule,
    NgFor,
    RouterLink
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})

export class UserComponent implements OnInit{  
  constructor(public userService: FirebaseServiceService, public dialog: MatDialog) {}

   ngOnInit() {
    this.userService.getData()
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}