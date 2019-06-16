import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";

declare var document;

enum THEME{
  DARK = 'dark',
  LIGHT = 'light'
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];

  currentTheme: THEME;

  constructor(private router: Router) {
    this.currentTheme = THEME.DARK;
  }

  ngOnInit() {
    this.items = [{
      label: 'My Profile',
      items: [
        {label: 'Edit Profile', icon: 'pi pi-fw pi-pencil'},
        {
          label: 'Sign Out',
          icon: 'pi pi-fw pi-sign-out',
          command: (event: any) => {
            this.router.navigate(['/signin']);
          }
        }
      ]
    },
      {
        label: 'Settings',
        items: [
          {
            label: 'Switch Theme ',
            icon: 'pi pi-fw pi-eye',
            command: this.toggleTheme
          }
        ]
      }];
  }

  static setTheme(themeName) {
    document.getElementById('html-root').className = themeName;
  }

  toggleTheme(event: any) {
    if (this.currentTheme === THEME.LIGHT) {
      this.currentTheme = THEME.DARK;
    } else {
      this.currentTheme = THEME.LIGHT;
    }
    HeaderComponent.setTheme(this.currentTheme);
  }

}
