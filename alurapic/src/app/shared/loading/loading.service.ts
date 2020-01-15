import { Injectable } from '@angular/core';
import { Subject, pipe } from 'rxjs';
import { LoadingType } from './loading.type';
import { startWith } from 'rxjs/internal/operators/startWith';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  
  loadingSubject = new Subject<LoadingType>();

  getLoading() {
    return this.loadingSubject
      .asObservable()
      .pipe(startWith(LoadingType.STOPPED));
  }

  start() {
      this.loadingSubject.next(LoadingType.LOADING)
  }

  stop() {
      this.loadingSubject.next(LoadingType.STOPPED);
  }
}
