import { Component } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	private path: string
	constructor(private fileChooser: FileChooser,
				private fileOpener: FileOpener) { } 
				
	async filePickerTest() {
		this.path = await this.fileChooser.open();
		let result = await this.fileOpener.open(this.path, 'test/plain');
		result = result;
	}
	
}
