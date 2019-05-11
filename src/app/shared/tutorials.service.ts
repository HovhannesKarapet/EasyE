import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TutorialsService {

  constructor(private http: HttpClient) { }

  getTutorials() {
    return this.http.get('http://localhost:3000/lessons');
  }
}
