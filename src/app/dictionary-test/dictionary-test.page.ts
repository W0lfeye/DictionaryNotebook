import { Component, OnInit } from '@angular/core';
import * as papa from 'papaparse'

@Component({
  selector: 'app-dictionary-test',
  templateUrl: './dictionary-test.page.html',
  styleUrls: ['./dictionary-test.page.scss'],
})
export class DictionaryTestPage implements OnInit {
	csvData: any[];
	primaryLanguage: string;
	secondaryLanguage: string;
	languages: string[];
	selectedWord: any[];
	translateFrom: string;
	translateTo: string;
	translateToPrimary: boolean;
	answerIsValid: boolean;
	
	
	constructor() { }

	ngOnInit() {
		papa.parse('assets/dictionary.csv', {
			download: true,
			header: true,
			delimiter: ';',
			complete: (result) => {
				this.csvData = result.data;
				this.languages = Object.keys(this.csvData[0]);
			}
		});
	}

	getWord(): void {
		this.answerIsValid = true;
		
		let index = Math.floor(Math.random() * this.csvData.length);
		this.selectedWord = this.csvData[index];
		
		this.secondaryLanguage = this.getSecondaryLanguage();
		
		this.translateToPrimary = Math.random() >= 0.5;
		this.translateFrom = this.translateToPrimary ? this.selectedWord[this.secondaryLanguage] : "";
		this.translateTo = !this.translateToPrimary ? this.selectedWord[this.secondaryLanguage] : "";
	}
	
	private getSecondaryLanguage(): string {
		let index  = Math.floor(Math.random() * this.languages.length);
		return this.primaryLanguage == this.languages[index] ? this.getSecondaryLanguage() : this.languages[index];
	}
	
	testWord(): void {
		this.answerIsValid = this.translateToPrimary ?
			this.translateTo == this.selectedWord[this.primaryLanguage] :
			this.translateFrom == this.selectedWord[this.primaryLanguage] ;
	}
}