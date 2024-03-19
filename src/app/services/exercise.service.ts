import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { exerciseResponse } from '../interfaces/exerciseResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private http:HttpClient) { }

  getExerciseById(id:number):Observable<exerciseResponse>{
    return this.http.get<exerciseResponse>("/api/exercises/"+id);
  }
}
