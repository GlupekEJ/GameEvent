import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';

import { api } from '../models/api';

@Injectable({
  providedIn: 'root',
})
export class APIService implements OnInit {
  private url = 'http://localhost:3010';

  constructor(private http: HttpClient) {}

  getCommentaren(): Observable<api[]> {
    return this.http.get<api[]>(`${this.url}/comments`);
  }

  async getComments(): Promise<api[]> {
    return await firstValueFrom(this.http.get<api[]>(`${this.url}/comments`));
  }

  getFrom(): Observable<api[]> {
    return this.http.get<api[]>('https://jsonplaceholder.typicode.com/todos/2');
  }

  ngOnInit(): void {}

  async addComment(author: string, comment: string): Promise<api> {
    return await firstValueFrom(
      this.http.post<api>(`${this.url}/comments`, { author, comment })
    );
  }

  async addTodo(
    userId: number,
    id: number,
    title: string,
    completed: boolean
  ): Promise<api> {
    return await firstValueFrom(
      this.http.post<any>('https://jsonplaceholder.typicode.com/todos/', {
        userId,
        id,
        title,
        completed,
      })
    );
  }
}
