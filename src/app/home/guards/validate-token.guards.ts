import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ValidateTokenGuard implements CanActivate {

  constructor( private tokenService: TokenStorageService,
               private router: Router ) {}

  canActivate(): Observable<boolean> | boolean {
    let token = this.tokenService.getToken();
    if (token) {
        return true;
    }
    this.router.navigateByUrl('/auth/login');
    return false;
  }

  canLoad(): Observable<boolean> | boolean {
    let token = this.tokenService.getToken();
    if (token) {
        return true;
    }
    this.router.navigateByUrl('/auth/login');
    return false;
    }
}