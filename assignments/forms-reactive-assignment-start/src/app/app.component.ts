import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  statuses: string[] = ['Stable', 'Critical', 'Finished'];

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required],this.forbiddenProjectNameAsync),
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'projectStatus': new FormControl('Critical')
    });
  }

  onSubmit() {
    console.log(this.projectForm);
  }

  forbiddenProjectName(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Test') {
      return { 'forbiddenProjectName': true };
    }
    return null;
  }

  forbiddenProjectNameAsync(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ 'forbiddenProjectName': true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
  }
}