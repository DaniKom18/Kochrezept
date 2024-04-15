import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import {RouterTestingModule} from "@angular/router/testing";
import {By} from "@angular/platform-browser";
import {RouterLinkWithHref} from "@angular/router";

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent, RouterTestingModule.withRoutes([])]
    })
    .compileComponents();

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
});
