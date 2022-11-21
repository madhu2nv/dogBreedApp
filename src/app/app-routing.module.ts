import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogbreedComponent } from './dogbreed/dogbreed.component';

const routes: Routes = [
  {path : '', component : DogbreedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
