import { AllComponent } from './components/all/all.component';
import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';

// where rounts are specified
const routes: Routes = [
  {path: '', component: MainComponent}, //no path = main
  {path: 'main', component: MainComponent},
  {path: 'all', component: AllComponent}, //name of the class
  {path: 'register', component: RegisterComponent},

  {path: '**', component: MainComponent} // wildcard

];

// modules are the glue, controls how rounts are created and rendered
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
