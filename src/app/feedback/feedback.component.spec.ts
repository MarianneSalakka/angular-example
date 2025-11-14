import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedbackComponent } from './feedback.component';
import { provideRouter, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { provideLocationMocks } from '@angular/common/testing';
//import { Title } from '@angular/platform-browser';
//import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;
  let router: Router; // lisää
  let routerSpy: jasmine.Spy; // lisää

  beforeEach(async () => {
    // alustaa
    await TestBed.configureTestingModule({
      providers: [
        provideRouter([{ path: 'home', component: HomeComponent }]),
        provideLocationMocks(), // Mock sijaintipalvelu, joka estää oikean selaimen navigoinnin
      ],
      imports: [FeedbackComponent, BrowserAnimationsModule],
      /*schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]*/
    }).compileComponents();

    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);
    routerSpy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('cancel-button navigates to home-page', () => {
    component.cancel();
    expect(routerSpy).toHaveBeenCalledOnceWith(['home']);
  });

  it('title is invalid if it has 1 letter', () => {
    const titleControll = component.fbForm.get('title');
    titleControll?.setValue('A');
    expect(titleControll?.invalid).toBeTrue();
  });

  it('title is not valid if it is empty', () => {
    const titleControll = component.fbForm.get('title');
    titleControll?.setValue('');
    expect(titleControll?.invalid).toBeTrue();
  });

  it('name is invalid if it has numbers', () => {
    const nameControll = component.fbForm.get('name');
    nameControll?.setValue('55');
    expect(nameControll?.invalid).toBeTrue();
  });
});
