import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CaloriesComponent } from './calories/calories.component';
import { BmiCalcComponent } from './bmi-calc/bmi-calc.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'calories', component: CaloriesComponent },
  {path: 'bmi', component: BmiCalcComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
