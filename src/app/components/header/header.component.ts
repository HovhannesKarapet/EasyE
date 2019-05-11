import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/auth.service';
import {Router} from '@angular/router';
import {UsersService} from '../../shared/users.service';

declare var jQuery: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  singIn: FormGroup;
  users: any = [];

  constructor(private authService: AuthService, private router: Router, private usersService: UsersService) {
  }

  ngOnInit() {
    this.singIn = new FormGroup({
      login: new FormControl('HK', [Validators.required]),
      pass: new FormControl('123456', [Validators.required])
    });

    if (localStorage.getItem('id')) {
      this.authService.login();
    }
  }

  onSingin() {
    this.usersService.getUsers().subscribe((data) => {
      this.users = data;
      this.users.every((item) => {
        if (this.singIn.get('login').value === item.login && this.singIn.get('pass').value === item.pass) {
          this.authService.login();
          this.router.navigate(['/tutorial']);
          localStorage.setItem('id', item.id);
          localStorage.setItem('level', JSON.stringify(item.levels));
          jQuery("#log").modal("hide");
          return false;
        }
        return true;
      });
      if (!this.authService.isLoggedIn) {
        this.singIn.reset();
        this.singIn.get('login').markAsTouched();
        this.singIn.get('pass').markAsTouched();
      }
    });
  }

  onSingout() {
    this.authService.logout();
    this.router.navigate(['']);
    localStorage.clear();
  }

}
