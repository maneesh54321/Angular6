import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  displaySidebar: boolean;

  constructor() {
    this.displaySidebar = false;
  }

  ngOnInit() {
  }

  toggleSidebar() {
    this.displaySidebar = !this.displaySidebar;
  }

}
