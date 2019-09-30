import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmePage } from './filme.page';

describe('FilmePage', () => {
  let component: FilmePage;
  let fixture: ComponentFixture<FilmePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
