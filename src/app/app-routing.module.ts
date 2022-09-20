import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateVoterComponent } from './create-voter/create-voter.component';
import { VoterListComponent } from './voter-list/voter-list.component';

const routes: Routes = [
  {path:'voter', component:VoterListComponent},
  {path:'',redirectTo:'voter',pathMatch:'full'},
  {path:'create-voter',component:CreateVoterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
