import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DictionaryTestPage } from './dictionary-test.page';

const routes: Routes = [
  {
    path: '',
    component: DictionaryTestPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DictionaryTestPage]
})
export class DictionaryTestPageModule {}
