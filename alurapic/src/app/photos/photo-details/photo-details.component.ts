import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';
import { PhotoComment } from '../photo/photo-comment';

@Component({
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {
    
  photo$: Observable<Photo>;
  photoId: number;

  constructor(
      private route: ActivatedRoute,
      private photoService: PhotoService 
  ) {}

  ngOnInit(): void {
    const photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(photoId);
  }

}
