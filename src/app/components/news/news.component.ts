import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: []
})
export class NewsComponent implements OnInit {

  public news = null;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.news = this.newsService.getNews();
  }

}
