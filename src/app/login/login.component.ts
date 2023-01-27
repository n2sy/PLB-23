import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  defaultProfil = 'Fullstack';
  myComment = 'Je suis un ingénieur....';

  submitHandler(f) {
    console.log(f.value);
  }

  generatePwd(f: NgForm) {
    f.setValue({
      login: '',
      password: 'azerty123456',
      infos: {
        profil: '',
        commentaire: '',
      },
      exemple: '',
    });
  }
  generatePwdII(f: NgForm) {
    f.form.patchValue({
      password: 'azerty123456',
    });
  }

  onReset(f: NgForm) {
    f.reset();
  }
}
