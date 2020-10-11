import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateSodaPageRoutingModule } from './update-soda-routing.module';

import { UpdateSodaPage } from './update-soda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UpdateSodaPageRoutingModule
  ],
  declarations: [UpdateSodaPage]
})
export class UpdateSodaPageModule {}
