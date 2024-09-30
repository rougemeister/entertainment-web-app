import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, switchMap } from 'rxjs';
import { Media } from '../../core/models/app.model';
import {
  selectAllMediaItems,
  selectFilteredMediaItems,
  selectMediaLoading,
} from '../../core/store/media/media.selectors';
import { AsyncPipe } from '@angular/common';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { SearchBarComponent } from '../../shared/components/search-bar/search-bar.component';
import { FilterPipe } from '../../shared/pipes/filter.pipe';
import { ActivatedRoute } from '@angular/router';
import { CardComponent } from '../../shared/components/card/card.component';
import { loadMedia } from '../../core/store/media/media.actions';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AsyncPipe,
    NavbarComponent,
    SearchBarComponent,
    FilterPipe,
    CardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent {
  searchTerm = '';
  filteredMedia$: Observable<Media[]>;
  mediaLoading$: Observable<boolean>;

  constructor(private store: Store, private route: ActivatedRoute) {
    this.filteredMedia$ = this.store.select(selectFilteredMediaItems(null));
    this.mediaLoading$ = this.store.select(selectMediaLoading);
  }

  onSearchTermChange(searchTerm: string) {
    this.searchTerm = searchTerm;
  }

  ngOnInit() {
    this.store.dispatch(loadMedia());
  }
}
