import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeAdminComponent } from "./pages/admin/home/homeadmin.component";
import { HomeClientComponent } from "./pages/client/home/homeclient.component";
import { MainComponent } from "./pages/main/main.component";

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'homeclient',
                component: HomeClientComponent
            },
            {
                path: 'homeadmin',
                component: HomeAdminComponent
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class MainRoutingModule { }