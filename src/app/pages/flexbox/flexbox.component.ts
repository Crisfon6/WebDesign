import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Card, CardComponent, RoundedButtonComponent } from 'ngx-components-lib-cf6';
import { RouteMenu } from '../../interfaces/routeMenu.interface';
import { getTopicByName } from '../../utils/utils';
import { Exercise, Topic } from '../../interfaces';
import { IdeComponent } from '../../components/ide/ide.component';

@Component({
  selector: 'app-flexbox',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RoundedButtonComponent,CardComponent,IdeComponent],
  templateUrl: './flexbox.component.html',
  styleUrl: './flexbox.component.scss'
})
export class FlexboxComponent {
  topicName = 'flexbox';
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
