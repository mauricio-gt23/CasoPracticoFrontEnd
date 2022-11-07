import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { Credentials } from "../../interfaces/credentials.interface";
import { AuthService } from "../../services/auth.service";
import { TokenStorageService } from "../../services/token-storage.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
  })
export class LoginComponent implements OnInit{
  
  userId: any;
  userType: any;
  hide: boolean = true;
  showMessage: boolean = false;
  credentials: Credentials = {};
  roles: string[] = [];
  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor( private router: Router, private authService: AuthService, private tokenStorage: TokenStorageService) {}

  ngOnInit(): void {
    if(this.tokenStorage.getToken()){
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  login(): void {
    if (this.miFormulario.valid) {
      this.credentials = {
        username: this.miFormulario.value.username,
        password: this.miFormulario.value.password
      }
      this.authService.login(this.credentials).subscribe( (data) => {
        this.showMessage = false;
        localStorage.setItem("password", this.credentials.password!);
        this.tokenStorage.saveToken(data.result.token);
        this.tokenStorage.saveUser(data.result);
        this.roles = this.tokenStorage.getUser().roles;
        localStorage.setItem("userId",data.result["id"]);
        if( this.roles[0] ===  "ROLE_CLIENTE"){
          this.router.navigate(['main/homeclient']);
        } else {
          this.router.navigate(['main/homeadmin'])
        }
      }, error => { this.showMessage = true; });
    } else {
      this.showMessage = true;
    }
  }
}