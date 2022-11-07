import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { delay } from "rxjs";
import { Client } from "../../interfaces/client.interface";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
  })
export class SignupComponent {

  hide: boolean = true;
  showMessage: boolean = false;
  userId: any;
  modalCongrats: boolean = false;
  client: Client = {};
  miFormulario: FormGroup = this.fb.group({
    name: [ this.client.name, [Validators.required]],
    lastName: [ this.client.lastName, [Validators.required]],
    email: [ this.client.email, [Validators.required, Validators.email]],
    password: [ this.client.password, [Validators.required]],
    username: [ this.client.username, [Validators.required]]
  });
  
  constructor( private router: Router, private fb: FormBuilder, private authService: AuthService ) {}

  signup(): void {
    if (this.miFormulario.valid) {
      this.client = {
        username: this.miFormulario.controls['username'].value,
        name: this.miFormulario.controls['name'].value,
        lastName: this.miFormulario.controls['lastName'].value,
        email: this.miFormulario.controls['email'].value,
        password: this.miFormulario.controls['password'].value,
        roles: ["ROLE_CLIENTE"]
      }
      console.log(this.client);
      this.authService.registerClient(this.client)
        .subscribe( (data) => {
          this.router.navigate(['./sign-in']);
      })
    } else {
      this.showMessage = true;
    }
  }

  campoNoEsValido( field: string ) {
    return this.miFormulario.controls[field].errors 
           && this.miFormulario.controls[field].touched;
  }

  closeCongrats(): void {
    this.modalCongrats = false;
    this.router.navigate(['/main/homeclient']);
  }
}