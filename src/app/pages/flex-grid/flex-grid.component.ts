import { Component } from '@angular/core';
import { Card, CardComponent } from 'ngx-components-lib-cf6';
import { Exercise, Topic } from '../../interfaces';
import { getTopicByName } from '../../utils/utils';
import { IdeComponent } from '../../components/ide/ide.component';

@Component({
  selector: 'app-flex-grid',
  standalone: true,
  imports: [CardComponent, IdeComponent],
  templateUrl: './flex-grid.component.html',
  styleUrl: './flex-grid.component.scss'
})
export class FlexGridComponent {

  topicName = 'flex-grid';
  exerciseNumberSelected = 1;
  topic: Topic = getTopicByName(this.topicName);
  showIde = true;

  cardInfo!: Card;
  ngOnInit(): void {


  }
}
