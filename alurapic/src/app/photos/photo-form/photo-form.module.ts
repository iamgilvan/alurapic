import { RouterModule } from '@angular/router';
import { VmessageModule } from './../../shared/components/vmessage/vmessage.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photo-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
        declarations: [PhotoFormComponent],
        imports: [ 
            CommonModule,
            ReactiveFormsModule,
            VmessageModule,
            FormsModule,
            RouterModule
        ]
    })
export class PhotoFormModule { }