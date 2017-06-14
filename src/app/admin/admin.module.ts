import {NgModule} from "@angular/core";
import { MaterialModule } from "@angular/material";
import { AddGalleryImageComponent } from './add-gallery-image/add-gallery-image.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { EditKitchenComponent } from './edit-kitchen/edit-kitchen.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ErrorComponent } from './error/error.component';
import { AppRoutingModule } from "app/admin/admin.route";
import { AdminComponent } from './admin/admin.component';

@NgModule({
    declarations:[
        AddGalleryImageComponent,
        LoginComponent, 
        AdminHomeComponent, 
        EditKitchenComponent, 
        AddEventComponent, 
        AddPostComponent, 
        ErrorComponent, AdminComponent],
    imports:[AppRoutingModule,MaterialModule],
    providers:[],
    bootstrap:[]
})

export class AdminModule{}