import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SodaListPage } from './soda-list.page';

const routes: Routes = [
  {
    path: '',
    component: SodaListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SodaListPageRoutingModule {}
