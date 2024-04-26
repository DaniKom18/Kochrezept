import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  constructor(private keycloakservice: KeycloakService) {
  }

  logout() {
    this.keycloakservice.clearToken()
    this.keycloakservice.logout()
  }
}
