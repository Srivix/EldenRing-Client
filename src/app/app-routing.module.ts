import { COMPILER_OPTIONS, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildListComponent } from './build/build-list/build-list.component';
import { WeaponListComponent } from './weapon/weapon-list/weapon-list.component';

const routes: Routes = [
  { path: '', redirectTo:'', pathMatch: 'full'},
  { path: 'weapons', component: WeaponListComponent },
  { path: 'builds', component: BuildListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
