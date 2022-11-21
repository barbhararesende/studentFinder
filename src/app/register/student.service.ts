import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {

  private api = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

   getStudent(tecnology: string): any {
    return this.http.get(`${this.api}/student/${tecnology}`);
  }

}