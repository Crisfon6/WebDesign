import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { normalizeString } from '../utils/utils';
import { Exercise } from '../interfaces/exercise.interface';
import { Topic } from '../interfaces/topic.interface';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor() { }

  getExercise(topic: string, exerciseNumber: number): Exercise {
    let exercise = {} as Exercise;
    topic = normalizeString(topic);
    const topics = environment!.topics.find(({ name }) => normalizeString(name) === topic)!;
    const exerciseFound = topics!.exercises.find(({ id }) => id.toString() === exerciseNumber.toString());
    if (exerciseFound) {
      exercise = exerciseFound;
    }
    return exercise;
  }
}
