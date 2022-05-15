import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponListComponent } from './weapon-list/weapon-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { WeaponItemComponent } from './weapon-list/weapon-item/weapon-item.component';
import { MatCardModule } from '@angular/material/card';
import { WeaponDetailComponent } from './weapon-detail/weapon-detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FilterNamePipe } from '../core/pipes/weaponfiltername';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FilterTypePipe } from '../core/pipes/weaponfiltertype';
import { WeaponEditComponent } from './weapon-edit/weapon-edit.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    WeaponListComponent,
    WeaponItemComponent,
    WeaponDetailComponent,
    FilterNamePipe,
    FilterTypePipe,
    WeaponEditComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    BrowserModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressBarModule
  ]
})
export class WeaponModule { }
