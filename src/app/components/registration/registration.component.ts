import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../shared/users.service';
import {Router} from '@angular/router';
import {AuthService} from '../../shared/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  register: FormGroup;
  users: any = [];
  user;
  flag = true;

  constructor(private usersService: UsersService, private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.register = new FormGroup({
      name: new FormControl('', [Validators.required]),
      login: new FormControl('', [Validators.required]),
      pass: new FormControl('', [Validators.required]),
    });
    this.usersService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  onRegister() {
    this.flag = true;
    this.user = {
      name: this.register.get('name').value,
      login: this.register.get('login').value,
      pass: this.register.get('pass').value,
      levels: {
        l1: true,
        l2: false,
        l3: false,
        l4: false,
        l5: false,
        l6: false,
        l7: false
      },
    };
    this.users.every((item) => {
      if (this.register.get('login').value === item.login) {
        this.flag = false;
        this.register.reset();
        this.register.get('login').markAsTouched();
        this.register.get('pass').markAsTouched();
        return false;
      }
      return true;
    });
    if (this.flag) {
      this.usersService.postUsers(this.user).subscribe((data) => {
        this.users.push(data);
      });
      this.authService.login();
      localStorage.setItem('id', this.users.length + 1);
      localStorage.setItem('level', JSON.stringify(this.user.levels));
      this.router.navigate(['/tutorial']);
    }
  }

}
