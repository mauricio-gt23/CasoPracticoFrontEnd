import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";

import { MainRoutingModule } from './main-routing.module';
import { HomeAdminComponent } from "./pages/admin/home/homeadmin.component";
import { HomeClientComponent } from "./pages/client/home/homeclient.component";
import { MainComponent } from "./pages/main/main.component";
import { StatusPipe } from "./pipes/status.pipe";

@NgModule({
    declarations: [
        MainComponent,
        HomeAdminComponent,
        HomeClientComponent,

        StatusPipe
    ],
    imports: [
      CommonModule,
      MainRoutingModule,
      MaterialModule
    ]
  })
  export class MainModule { }