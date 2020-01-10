import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/internal/operators/filter';
import { NavigationEnd } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { switchMap } from 'rxjs/internal/operators/switchMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title) {

    }

    ngOnInit(): void {
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .pipe(map(() => this.activatedRoute))
        .pipe(map(route => {
          while(route.firstChild) route = route.firstChild;
          return route;
        }))
        .pipe(switchMap(route => route.data))
        .subscribe(event => this.titleService.setTitle(event.title));
    }
 }