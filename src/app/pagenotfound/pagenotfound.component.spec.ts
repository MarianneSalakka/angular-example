import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagenotfoundComponent } from './pagenotfound.component';
//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('PagenotfoundComponent', () => {
  let component: PagenotfoundComponent;
  let fixture: ComponentFixture<PagenotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagenotfoundComponent],
      /*schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],*/
    }).compileComponents();

    fixture = TestBed.createComponent(PagenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
