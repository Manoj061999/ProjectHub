import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { ApplicationComponent } from './application/application.component';

const routes: Routes = [

  {path:'',component:UserComponent},
  {path:'application',component:ApplicationComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
