import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  defaultProfil = 'Fullstack';
  myComment = 'Je suis un ingénieur....';
  showError = false;

  constructor(private auth: AuthService, private router: Router) {}

  submitHandler(f) {
    console.log(f.value);
    this.auth.seConnecter(f.value).subscribe({
      next: (response) => {
        console.log(response);
        localStorage.setItem('myToken', response['token']);
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        this.showError = true;
        f.reset();
      },
    });
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
