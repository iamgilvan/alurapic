import { SignUpService } from './signup/signup.service';
import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';
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
        SignUpComponent,
        HomeComponent
    ],
    imports: [ 
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        VmessageModule,
        RouterModule,
        HomeRoutingModule
     ],
     providers:
     [
         SignUpService
     ]

})
export class HomeModule {}