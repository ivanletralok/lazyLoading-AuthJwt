import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuardGuard } from '../guard/user-guard.guard';
import { EditComponent } from './edit/edit.component';
import { ReadComponent } from './read/read.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'edit', component: EditComponent, canActivate: [UserGuardGuard] },
      { path: 'read', component: ReadComponent, canActivate: [UserGuardGuard] },
      { path: '**', redirectTo: 'edit' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
