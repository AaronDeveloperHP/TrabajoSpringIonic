import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateSodaPage } from './update-soda.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateSodaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateSodaPageRoutingModule {}
