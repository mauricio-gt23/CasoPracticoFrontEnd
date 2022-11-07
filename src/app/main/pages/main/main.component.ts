import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TokenStorageService } from "src/app/home/services/token-storage.service";
import { UserService } from "../../services/user.service";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
  })
export class MainComponent implements OnInit {

  userId: any;
  name: string = '';
  lastName: string = '';

  constructor(private route: Router, private userService: UserService, private tokenService: TokenStorageService) {
    this.userId = localStorage.getItem('userId');
  }


  ngOnInit(): void {
    this.userService.getUserById(this.userId).subscribe( (data) => {
      this.name = data.result.name;
      this.lastName = data.result.lastName;
    })
  }

  logout(): void {
    localStorage.clear();
    this.tokenService.signOut();
    this.route.navigate(['auth/sign-in']);
  }
  
}
  