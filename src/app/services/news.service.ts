import { Injectable } from '@angular/core';
import news from '../../assets/json-data/news.json'
import { News } from '../models/news.type';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() {}

  public getNews(): News[] {
    return news.news;
  }
}