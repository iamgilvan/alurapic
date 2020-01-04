import { PhotoModule } from './../photo/photo.module';
import { NgModule } from "@angular/core";
import { PhotoDetailsComponent } from "./photo-details.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [PhotoDetailsComponent],
    exports: [PhotoDetailsComponent],
    imports: [CommonModule, PhotoModule]
})
export class PhotoDetailsModule { }