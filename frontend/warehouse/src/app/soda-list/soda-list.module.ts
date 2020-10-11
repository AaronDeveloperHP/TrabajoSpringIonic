import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SodaListPageRoutingModule } from './soda-list-routing.module';

import { SodaListPage } from './soda-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SodaListPageRoutingModule
  ],
  declarations: [SodaListPage]
})
export class SodaListPageModule {}
