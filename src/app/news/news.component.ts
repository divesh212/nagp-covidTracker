import { Component, OnInit } from '@angular/core';
import { News } from '../interfaces/News';
import { NewsService } from './news.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  allNews: News[];

  constructor(private newsService: NewsService, private route: Router, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getAllNews();
  }

  getAllNews() {
    this.newsService.getNews().subscribe(data => {
      this.allNews = data;
    })
  }

  addNews() {
    if (localStorage.getItem('TOKEN')) {
      this.route.navigate(['/news/add']);
    } else {
      this.toastrService.error("You must first login to add news.", "COVID-19 Tracker")
      this.route.navigate(['/login']);
    }
  }

}
