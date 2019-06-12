import {Component, OnInit} from '@angular/core';

declare var document;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo-app';
  checked: boolean;

  constructor() {
    this.checked = true;
  }

  ngOnInit() {

  }

  toggleTheme(themeName){
    document.getElementById('html-root').className=themeName;
  }

  handleChange($event: any) {
    if(this.checked){
      this.toggleTheme('dark');
    }else {
      this.toggleTheme('light');
    }
  }
}
