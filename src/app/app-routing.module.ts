import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeaponListComponent } from './weapon/weapon-list/weapon-list.component';

const routes: Routes = [
  { path: 'weapons', component: WeaponListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
