import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { Router } from '@angular/router';
import { provideRouter } from '@angular/router';
import { provideLocationMocks } from '@angular/common/testing';
//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router; // lisää
  let routerSpy: jasmine.Spy; // lisää

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideRouter([{ path: 'feedback', component: HomeComponent }]),
        provideLocationMocks(), // Mock sijaintipalvelu, joka estää oikean selaimen navigoinnin
      ],
      imports: [HomeComponent],
      /*schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],*/
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);
    routerSpy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('FeedbackPage-button navigates to feedback', () => {
    component.showFeedbackPage();
    expect(routerSpy).toHaveBeenCalledOnceWith(['feedback']);
  });
});
