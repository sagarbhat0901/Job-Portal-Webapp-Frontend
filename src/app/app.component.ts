import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn:boolean = Boolean(localStorage.getItem('loggedIn'));
  title: any;
  constructor(private router:Router){};
  logOut() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
