import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSodaPage } from './add-soda.page';

const routes: Routes = [
  {
    path: '',
    component: AddSodaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSodaPageRoutingModule {}
