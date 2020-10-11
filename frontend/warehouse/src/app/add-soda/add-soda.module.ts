import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSodaPageRoutingModule } from './add-soda-routing.module';

import { AddSodaPage } from './add-soda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddSodaPageRoutingModule
  ],
  declarations: [AddSodaPage]
})
export class AddSodaPageModule {}
