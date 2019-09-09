import { Component, OnInit } from '@angular/core';
import {AdminPostService} from '../../../core/service/admin-post.service';
import {AlertService} from '../../../core/service/alert.service';
import {Post} from '../../../core/dto/Post';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  posts: Post[] = [];

  constructor(private adminPostService: AdminPostService, private alertService: AlertService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.adminPostService.getAllPosts().subscribe(value => {
      this.posts = value;
    });
  }
  onStatusChange(post) {
    console.log(post);
  }
  onView(post) {
    console.log(post);
  }
  onUpdate(post) {
    console.log(post);
  }
  onDelete(post) {
    console.log(post);
  }

}
