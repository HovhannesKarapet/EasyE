import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UsersService} from './users.service';

@Injectable({
  providedIn: 'root'
})
export class Auth7Guard implements CanActivate {

  constructor(private usersService: UsersService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.usersService.getLevel(7);
  }
}
