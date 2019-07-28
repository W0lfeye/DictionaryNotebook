import { Component, OnInit } from '@angular/core';
import * as papa from 'papaparse'

@Component({
  selector: 'app-dictionary-test',
  templateUrl: './dictionary-test.page.html',
  styleUrls: ['./dictionary-test.page.scss'],
})
export class DictionaryTestPage implements OnInit {
	csvData: any[] = [];
	selectedLanguage: string = '';
	
  constructor() { }

  ngOnInit() {
	  papa.parse('assets/dictionary.csv', {
		  download: true,
		  header: true,
		  delimiter: ';',
		  complete: (result) => {this.csvData = result.data}
		})
  }
  
  
}