import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddfilmeseriePage } from './addfilmeserie.page';

const routes: Routes = [
  {
    path: '',
    component: AddfilmeseriePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddfilmeseriePage]
})
export class AddfilmeseriePageModule {}
