import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomelistComponent } from './homelist/homelist.component';
import { AddUserComponent } from './adduser/adduser.component';

const routes: Routes = [
  {
    path:'',component:HomelistComponent
  },
  {
    path:'adduser',component:AddUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
