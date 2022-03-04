import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponListComponent } from './weapon-list/weapon-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { WeaponItemComponent } from './weapon-list/weapon-item/weapon-item.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    WeaponListComponent,
    WeaponItemComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
  ]
})
export class WeaponModule { }
