import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryEditPage } from './dictionary-edit.page';

describe('DictionaryEditPage', () => {
  let component: DictionaryEditPage;
  let fixture: ComponentFixture<DictionaryEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictionaryEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
