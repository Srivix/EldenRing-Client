import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildListComponent } from './build/build-list/build-list.component';
import { MiBuildListComponent } from './build/mi-build-list/mi-build-list.component';
import { CalculatorComponent } from './calculator/calculator/calculator.component';
import { WeaponListComponent } from './weapon/weapon-list/weapon-list.component';

const routes: Routes = [
  { path: '', redirectTo:'calculator', pathMatch: 'full'},
  { path: 'weapons', component: WeaponListComponent },
  { path: 'builds', component: BuildListComponent },
  { path: 'misbuilds', component: MiBuildListComponent},
  { path: 'calculator', component: CalculatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
