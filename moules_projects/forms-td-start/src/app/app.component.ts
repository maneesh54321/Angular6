import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('myForm') signupForm:NgForm;
  defaultQuestion:string="pet";
  answer:string='';
  genders:string[]=['male','female'];
  user={
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted:boolean=false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({   //will replace all the values in the form with values provided here
    //   userData:{
    //     username:suggestedName,
    //     email:''
    //   },
    //   secret:'pet',
    //   questionAnswer:'',
    //   gender:'male'
    // });
    this.signupForm.form.patchValue({   //will just replace the value provided here...leave all other same as before
      userData: {
        username:suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log('Submitted', form);
  // }

  onSubmit(){
    this.submitted=true;
    this.user.username=this.signupForm.value.userData.username;
    this.user.email=this.signupForm.value.userData.email;
    this.user.secretQuestion=this.signupForm.value.secret;
    this.user.gender=this.signupForm.value.gender;
    this.user.answer=this.signupForm.value.questionAnswer;

    this.signupForm.reset();
  }
}
