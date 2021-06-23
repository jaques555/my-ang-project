import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyformComponent } from './myform/myform.component';
import { MylistaComponent } from './mylista/mylista.component';

const routes: Routes = [

{
  path: 'form',
  component: MyformComponent
},
{
  path: 'lista',
  component: MylistaComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
