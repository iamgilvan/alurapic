import { SignUpComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: 
    [
        SignInComponent,
        SignUpComponent
    ],
    imports: [ 
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        VmessageModule,
        RouterModule
     ]

})
export class HomeModule {}