import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import {RouterTestingModule} from "@angular/router/testing";
import {By} from "@angular/platform-browser";
import {Router, RouterLinkWithHref} from "@angular/router";
import {Location} from "@angular/common";
import {StartseiteComponent} from "../../masken/startseite/startseite.component";
import {MeineRezepteComponent} from "../../masken/meine-rezepte/meine-rezepte.component";
import {MeineFavoritenComponent} from "../../masken/meine-favoriten/meine-favoriten.component";
import {RezeptErstellenComponent} from "../../masken/rezept-erstellen/rezept-erstellen.component";
import {MeinProfilComponent} from "../../masken/mein-profil/mein-profil.component";
import {LeaderboardComponent} from "../../masken/leaderboard/leaderboard.component";

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent, RouterTestingModule.withRoutes([
        {path: 'startseite', component: StartseiteComponent },
        {path: 'meine-rezepte', component: MeineRezepteComponent },
        {path: 'meine-favoriten', component: MeineFavoritenComponent },
        {path: 'rezept-erstellen', component: RezeptErstellenComponent },
        {path: 'profil', component: MeinProfilComponent },
        {path: 'leaderboard', component: LeaderboardComponent },
      ])]
    })
    .compileComponents();

    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have links with correct routerLinks', () => {
    const links = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const linkDes = links.map(de => de.injector.get(RouterLinkWithHref));
    expect(linkDes[0].href).toContain('/startseite');
    expect(linkDes[1].href).toContain('/startseite');
    expect(linkDes[2].href).toContain('/meine-rezepte');
    expect(linkDes[3].href).toContain('/meine-favoriten');
    expect(linkDes[4].href).toContain('/rezept-erstellen');
    expect(linkDes[5].href).toContain('/leaderboard');
    expect(linkDes[6].href).toContain('/profil');
    expect(linkDes[7].href).toContain('/abmelden');
  });

  it('should display logo image correctly', () => {
    const logoImg = fixture.debugElement.query(By.css('li.nav-item a img'));
    expect(logoImg.nativeElement.src).toContain('assets/Logo.png');
    expect(logoImg.nativeElement.style.width).toBe('85px');
  });

  it('should navigate to Startseite page when link is clicked', fakeAsync(() => {
      // Arrange
      const routerLink = fixture.debugElement.query(By.css('a[routerLink="/startseite"]')).nativeElement;
      // Act
      routerLink.click();
      tick()
      fixture.detectChanges();

      expect(TestBed.inject(Router).url).toBe('/startseite');
  }));

  it('should navigate to Meine Rezepte page when link is clicked', fakeAsync(() => {
    // Arrange
    const routerLink = fixture.debugElement.query(By.css('a[routerLink="/meine-rezepte"]')).nativeElement;
    // Act
    routerLink.click();
    tick()
    fixture.detectChanges();

    expect(TestBed.inject(Router).url).toBe('/meine-rezepte');
  }));

  it('should navigate to Meine Favoriten page when link is clicked', fakeAsync(() => {
    // Arrange
    const routerLink = fixture.debugElement.query(By.css('a[routerLink="/meine-favoriten"]')).nativeElement;
    // Act
    routerLink.click();
    tick()
    fixture.detectChanges();

    expect(TestBed.inject(Router).url).toBe('/meine-favoriten');
  }));

  it('should navigate to Meine Rezept Erstellen page when link is clicked', fakeAsync(() => {
    // Arrange
    const routerLink = fixture.debugElement.query(By.css('a[routerLink="/rezept-erstellen"]')).nativeElement;
    // Act
    routerLink.click();
    tick()
    fixture.detectChanges();

    expect(TestBed.inject(Router).url).toBe('/rezept-erstellen');
  }));

  it('should navigate to Profil page when link is clicked', fakeAsync(() => {
    // Arrange
    const routerLink = fixture.debugElement.query(By.css('a[routerLink="/profil"]')).nativeElement;
    // Act
    routerLink.click();
    tick()
    fixture.detectChanges();

    expect(TestBed.inject(Router).url).toBe('/profil');
  }));

  it('should navigate to Leaderboard page when link is clicked', fakeAsync(() => {
    // Arrange
    const routerLink = fixture.debugElement.query(By.css('a[routerLink="/leaderboard"]')).nativeElement;
    // Act
    routerLink.click();
    tick()
    fixture.detectChanges();

    expect(TestBed.inject(Router).url).toBe('/leaderboard');
  }));
});
