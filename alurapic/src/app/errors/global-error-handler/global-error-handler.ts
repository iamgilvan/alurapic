import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';
import { ErrorHandler } from "@angular/core";
import * as StackTrace from "stacktrace-js";
import { LocationStrategy } from "@angular/common";
import { Injectable } from "@angular/core";
import { Injector } from "@angular/core";
import { PathLocationStrategy } from "@angular/common";
import { UserService } from "../../core/user/user.service";
import { ServerLogService } from "./server-log.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler { 

    constructor(private injector: Injector ) {

    }
    handleError(error: any): void {
        console.log('passei pelo handler')

        const location = this.injector.get(LocationStrategy);

        const url = location instanceof PathLocationStrategy ? location.path() : '';
        const userService = this.injector.get(UserService);
        const serverLogService = this.injector.get(ServerLogService);
        const router = this.injector.get(Router);

        const message = error.message
        ? error.message :
        error.toString();

        if (environment.production) router.navigate(['/error']);
        StackTrace
            .fromError(error)
            .then(stackFrames => {
                const stackAsString = stackFrames
                    .map(sf => sf.toString())
                    .join('\n')
                    console.log(message);
                    console.log(stackAsString);
                    console.log('o que será enviado para o servidor')
                    console.log({ message, url, stack: stackAsString});
                    serverLogService.log({ message, url, userName: userService.getUserName(), stack: stackAsString})
                    .subscribe(
                        () => console.log('Error logged on server'),
                        err => {
                            console.log(err);
                            console.log('Fail to send error log to server');
                        }
                );
            });
    }
}