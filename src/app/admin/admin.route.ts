import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from "app/admin/add-post/add-post.component";
import { AddEventComponent } from "app/admin/add-event/add-event.component";
import { AddGalleryImageComponent } from "app/admin/add-gallery-image/add-gallery-image.component";
import { EditKitchenComponent } from "app/admin/edit-kitchen/edit-kitchen.component";
import { AdminHomeComponent } from "app/admin/admin-home/admin-home.component";
import { LoginComponent } from "app/admin/login/login.component";
import { ErrorComponent } from "app/admin/error/error.component";
import { AdminComponent } from "app/admin/admin/admin.component";

const appRoutes: Routes = [
  { path: 'admin/login', component: LoginComponent },
  { 
      path:'admin',
      component:AdminComponent,
      children:[
            {   path:'home',component:AdminHomeComponent    },
            { 
                path: 'edit-kitchen',
                component: EditKitchenComponent,
                children:[
                    { path:'edit',component:EditKitchenComponent },
                    { path:'add-gallery-image',component:AddGalleryImageComponent},
                    { path:'add-event',component:AddEventComponent},
                    { path:'add-post',component:AddPostComponent},
                    { path:'',redirectTo:'add-post',pathMatch:'full'}
                ]
            },
            { path:'',redirectTo: 'home', pathMatch:'full'},
            { path: '**', component: ErrorComponent }
      ]
  },
];

@NgModule({
    imports:[RouterModule.forChild(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}