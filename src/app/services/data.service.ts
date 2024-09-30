import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MediaItem } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = '../assets/data/data.json'

  constructor(private http: HttpClient) { }

  getAllMediaItems(): Observable<MediaItem[]> {
    return this.http.get<MediaItem[]>(this.dataUrl);
  }
}
