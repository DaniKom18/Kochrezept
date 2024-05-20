import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {NavbarComponent} from "./shared-components/navbar/navbar.component";
import {RouterTestingModule} from "@angular/router/testing";
import {By} from "@angular/platform-browser";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, AppComponent, NavbarComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the app-navbar component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const navbarElement = fixture.debugElement.query(By.directive(NavbarComponent));
    expect(navbarElement).toBeTruthy();
  });
});
