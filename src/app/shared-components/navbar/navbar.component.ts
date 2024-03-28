import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {RouterLink, RouterLinkActive} from "@angular/router";

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
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        items: [
          {
            label: 'Mein Profil',
            icon: 'pi pi-refresh'
          },
        ]
      },
      {
        separator: true
      },
      {
        items: [
          {
            label: 'Abmelden',
            icon: 'pi pi-upload',
            routerLink: '/fileupload'
          }
        ]
      }
    ];
  }
}
