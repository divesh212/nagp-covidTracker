import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { News } from 'src/app/interfaces/News';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {

  addNewsForm: FormGroup;

  constructor(private newsSerive: NewsService, private formBuilder: FormBuilder, private route: Router) {
    this.addNewsForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      summary: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (!localStorage.getItem('TOKEN')) {
      this.route.navigate(['/login']);
    }
  }

  onSubmit(news: News) {
    this.newsSerive.addNews(news).subscribe();
    console.log("News added")
    this.route.navigate(['/news']);
  }

}
