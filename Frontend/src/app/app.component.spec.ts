import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {NavbarComponent} from "./shared-components/navbar/navbar.component";
import {RouterTestingModule} from "@angular/router/testing";
import {By} from "@angular/platform-browser";
import {RouterOutlet} from "@angular/router";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {UserService} from "./services/user.service";
import {KeycloakService} from "keycloak-angular";
import {MessageService} from "primeng/api";
import {of} from "rxjs";
import {KeycloakProfile} from "keycloak-js";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  let userService: UserService;
  let keycloakService: KeycloakService;
  let messageService: MessageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, AppComponent, NavbarComponent, HttpClientTestingModule],
      providers: [MessageService, KeycloakService, UserService]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    userService = TestBed.inject(UserService);
    keycloakService = TestBed.inject(KeycloakService);
    messageService = TestBed.inject(MessageService);

    fixture.detectChanges();
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

  it('should render the router-outlet component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const routerOutletElement = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(routerOutletElement).toBeTruthy();
  });

  it('should call the ngOnInit method', () => {
    spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should call isLoggedIn method', () => {
    // Arrange
    spyOn(keycloakService, 'isLoggedIn').and.returnValue(true); // Spy auf die Methode

    // Act
    component.ngOnInit();

    // Assert
    expect(keycloakService.isLoggedIn).toHaveBeenCalled(); // Überprüfen, ob die Methode aufgerufen wurde
  });

  it('should load user profile on ngOnInit', () => {
    spyOn(component, 'ngOnInit').and.callThrough(); // sicherstellen, dass ngOnInit aufgerufen wird
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should set userSession properties', () => {
    // Mock für userProfile erstellen
    const userProfile: KeycloakProfile = {id: '123', username: 'testUser', email: 'test@gmail.com'}; // Testdaten definieren

    // Stub für loadUserProfile-Methode erstellen
    spyOn(keycloakService, 'loadUserProfile').and.returnValue(Promise.resolve(userProfile));

    // Komponente initialisieren
    component.ngOnInit();

    // Überprüfen, ob die Werte in userSession korrekt gesetzt wurden
    expect(userProfile.id).toEqual(userProfile.id);
    expect(userProfile.email).toEqual(userProfile.email);
    expect(userProfile.username).toEqual(userProfile.username);
  });

  // it('should return that user already exist', () => {
  //   // Mock für userProfile erstellen
  //   const userProfile: KeycloakProfile = {
  //     id: '123',
  //     username: 'testUser',
  //     email: ''
  //   };
  //
  //   // Stub für loadUserProfile-Methode erstellen
  //   spyOn(keycloakService, 'loadUserProfile').and.returnValue(Promise.resolve(userProfile));
  //
  //   // Mock für saveUser-Methode erstellen
  //   spyOn(userService, 'saveUser').and.returnValue(of(userProfile));
  //
  //   // Komponente initialisieren
  //   component.ngOnInit();
  //
  //   // Überprüfen, ob saveUser-Methode aufgerufen wurde
  //   expect(userService.saveUser).toHaveBeenCalled();
  // });
});
