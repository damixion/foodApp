import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatSnackBarModule


  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatSnackBarModule
  ]
})
export class MaterialModule {}
