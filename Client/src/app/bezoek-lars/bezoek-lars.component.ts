import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { APIService } from '../services/api.service';
import { api } from '../models/api';

@Component({
  selector: 'app-bezoek-lars',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bezoek-lars.component.html',
  styleUrls: ['./bezoek-lars.component.css'],
})
export class BezoekLarsComponent implements OnInit {
  comments: api[] = [];
  newAuthor: string = '';
  newComment: string = '';
  public newTodos: any = {};
  userId: number = 0;
  id: number = 0;
  title: string = '';
  completed: boolean = false;

  public data: any = {};
  constructor(private apiService: APIService) {}

  ngOnInit(): void {
    this.fillData();
    this.fetchDetails();
    this.fetchTodos();
  }

  fillData() {
    this.apiService.getCommentaren().subscribe((comments) => {
      this.comments = comments;
      console.log(this.comments);
    });
  }
  // extra get from jsonplaceholder gave the html class display none in css
  public fetchDetails() {
    this.apiService.getFrom().subscribe((resp: any) => {
      console.log(resp);
      this.data = resp;
      console.log(this.data);
    });
  }
  public fetchTodos() {
    this.apiService.getFrom().subscribe((resp: any) => {
      console.log(resp);
      this.newTodos = resp;
      console.log(this.newTodos);
    });
  }

  async addComment(): Promise<void> {
    if (this.newAuthor && this.newComment) {
      try {
        const newComments = await this.apiService.addComment(
          this.newAuthor,
          this.newComment
        );
        this.comments.push(newComments);
        this.newAuthor = '';
        this.newComment = '';
      } catch (error) {
        console.error('Error adding comments:', error);
      }
    }
  }

  async addTodo(): Promise<void> {
    if (this.userId && this.id && this.title && this.completed) {
      try {
        const newTodos = await this.apiService.addTodo(
          this.userId,
          this.id,
          this.title,
          this.completed
        );
        this.comments.push(newTodos);
        console.log(newTodos);
        this.userId;
        this.id;
        this.title = '';
        this.completed = false;
      } catch (error) {
        console.error('Error adding todo:', error);
      }
    }
  }
}
