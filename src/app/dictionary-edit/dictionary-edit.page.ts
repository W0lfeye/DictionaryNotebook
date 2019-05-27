import { Component } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

@Component({
  selector: 'app-dictionary-edit',
  templateUrl: './dictionary-edit.page.html',
  styleUrls: ['./dictionary-edit.page.scss'],
})
export class DictionaryEditPage {

  private path: string
	constructor(private fileChooser: FileChooser,
				private fileOpener: FileOpener) { } 
				
	async filePickerTest() {
		this.path = await this.fileChooser.open();
		let result = await this.fileOpener.open(this.path, 'test/plain');
		result = result;
	}

}