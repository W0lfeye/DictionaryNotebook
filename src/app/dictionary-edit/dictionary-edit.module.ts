import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

import { DictionaryEditPage } from './dictionary-edit.page';

const routes: Routes = [
  {
    path: '',
    component: DictionaryEditPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DictionaryEditPage],
  providers: [
	FileChooser,
	FileOpener
  ]
})
export class DictionaryEditPageModule {}
