import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent {
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    // this.http.get('http://localhost:3000/cv/persons').subscribe({
    //   next: (response) => {
    //     console.log(response);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    //   complete: () => {
    //     console.log('Flux terminé !');
    //   },
    // });
  }

  goToAccounts() {
    this.router.navigateByUrl('/accounts');
  }

  goToCv() {
    this.router.navigate(['/cv']);
  }
}
