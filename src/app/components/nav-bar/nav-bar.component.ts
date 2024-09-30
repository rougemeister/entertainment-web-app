import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import * as MediaActions from '../../store/actions';
import * as MediaSelectors from '../../store/selectors';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  currentCategory$!: Observable<string>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.currentCategory$ = this.store.select(MediaSelectors.selectCategory);
    console.log('Current category:', this.currentCategory$);

  }

  setCategory(category: string) {
    this.store.dispatch(MediaActions.setCategory({ category }));
    console.log('Category set:', category);
  }
}
