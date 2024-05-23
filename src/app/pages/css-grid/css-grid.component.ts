import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RouteMenu } from '../../interfaces/routeMenu.interface';
import { Card, CardComponent, RoundedButtonComponent, } from 'ngx-components-lib-cf6';
import { IdeComponent } from '../../components/ide/ide.component';
import { getTopicByName } from '../../utils/utils';
import { Exercise, Topic } from '../../interfaces';


@Component({
  selector: 'app-css-grid',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RoundedButtonComponent,CardComponent,IdeComponent],
  templateUrl: './css-grid.component.html',
  styleUrl: './css-grid.component.scss',
})
export class CssGridComponent implements OnInit{
  topicName = 'css-grid';
  exerciseNumberSelected = 1;
  topic: Topic = getTopicByName(this.topicName);
  showIde=false;

  cardInfo!: Card ;
  ngOnInit(): void {


  }
  openExercise(exercise:Exercise) {
    this.exerciseNumberSelected = exercise.id;
    this.showIde = true;
  }
}
