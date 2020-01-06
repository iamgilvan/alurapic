import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../../photo/photo';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../../photo/photo.service';
import { PhotoComment } from '../../photo/photo-comment';
import { Input } from '@angular/core';

@Component({
  selector: 'app-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.css']
})
export class PhotoCommentsComponent implements OnInit {

  @Input() photoId: number;

  comments$: Observable<PhotoComment[]>;

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {

      this.comments$ = this.photoService.getComments(this.photoId);
  }
}