import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { DataService } from '../../services/data.service';
import { MediaItem } from '../../model/model';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavBarComponent, AsyncPipe, NgFor, NgIf],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {
  mediaItems: MediaItem[] = [];
  trendingItems: MediaItem[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllMediaItems().subscribe(mediaItems => {
      this.mediaItems = mediaItems;
      this.trendingItems = mediaItems.filter(item => item.isTrending);
      console.log('All items:', this.mediaItems);
      console.log('Trending items:', this.trendingItems);
    });
  }

  getItemImage(item: MediaItem): string {
    if (item.thumbnail?.trending?.large) {
      return item.thumbnail.trending.large;
    } else if (item.thumbnail?.regular?.large) {
      return item.thumbnail.regular.large;
    } else {
      return 'assets/fallback-image.jpg'; // Make sure this path is correct
    }
  }
}