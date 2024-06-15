import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { APIService } from '../services/api.service';
import { api } from '../models/api';

@Component({
  selector: 'app-bezoek-lars',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './bezoek-lars.component.html',
  styleUrls: ['./bezoek-lars.component.css']
})
export class BezoekLarsComponent implements OnInit {

  comments: api[] = [];
  newAuthor: string = '';
  newComment: string = '';

  constructor(private apiService: APIService) {}

  ngOnInit():void {
    this.fillData();


  }

  fillData(){
    this.apiService.getCommentaren().subscribe(comments=>{
      this.comments = comments;
      console.log(this.comments)
    })
  }

  async addComment(): Promise<void> {
    if (this.newAuthor&& this.newComment) {
      try {
        const newComments = await this.apiService.addComment(this.newAuthor, this.newComment);
        this.comments.push(newComments);
        this.newAuthor = '';
        this.newComment = '';
      } catch (error) {
        console.error('Error adding comments:', error);
      }
    }
  }
}
