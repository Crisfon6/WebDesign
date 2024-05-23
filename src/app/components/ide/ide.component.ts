import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ExerciseService } from '../../services/exercise.service';
import { EditorService } from '../../services/editor.service';

@Component({
  selector: 'app-ide',
  standalone: true,
  imports: [],
  templateUrl: './ide.component.html',
  styleUrl: './ide.component.scss'
})
export class IdeComponent implements OnChanges{
  @Input({ required: true }) topic!: string;
  @Input({ required: true }) exerciseNumber!: number;
  urlIde = "";
  public sanitizer = inject(DomSanitizer);
  constructor(private exerciseService: ExerciseService, private editorService: EditorService,
  ) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("IdeComponet",{topic: this.topic, number: this.exerciseNumber});
    const { html, css, js } = this.exerciseService.getExercise(this.topic, this.exerciseNumber);
    const url = this.editorService.getUrlIde(html, css, js);
    this.urlIde = url;
  }

}
