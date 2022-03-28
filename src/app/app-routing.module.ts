import { COMPILER_OPTIONS, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildListComponent } from './build/build-list/build-list.component';
import { CalculatorComponent } from './calculator/calculator/calculator.component';
import { WeaponListComponent } from './weapon/weapon-list/weapon-list.component';

const routes: Routes = [
  { path: '', redirectTo:'calculator', pathMatch: 'full'},
  { path: 'weapons', component: WeaponListComponent },
  { path: 'builds', component: BuildListComponent },
  { path: 'calculator', component: CalculatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
