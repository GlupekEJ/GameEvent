import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';

import {api} from '../models/api';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  private url = 'http://localhost:3007';

   constructor(private http:HttpClient) {}

    getCommentaren(): Observable<api[]>{
      return this.http.get<api[]>(`${this.url}/comments`);

    }

    getComments():Promise<api[]>{
      return firstValueFrom(this.http.get<api[]>(`${this.url}/comments`));
    }

    addComment(author: string, comment: string): Promise<api> {
      return firstValueFrom(this.http.post<api>(`${this.url}/comments`, { author, comment }));
    }

 
}
