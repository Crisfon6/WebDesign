import { Component, OnInit } from '@angular/core';
import { CodeEditorComponent, CodeRenderComponent } from 'ngx-components-lib-cf6';
import { CompilerComponent } from '../../../components/compiler/compiler.component';
import { ExerciseService } from '../../../services/exercise.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-exercise1',
  standalone: true,
  imports: [CompilerComponent,HttpClientModule],
  providers:[ExerciseService],
  templateUrl: './exercise1.component.html',
  styleUrl: './exercise1.component.scss'
})
export class Exercise1Component implements OnInit{
  html:string=` <section class="container-result">
  <div>1dasdasdashgrunraoeide</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
</section>`;
  css:string = `<style>.container-result {
    background: lightsalmon;
    border: 3px solid black;
    border-radius: 10px;
    display: grid;
    grid-template-columns: minmax(100px, 1fr) 1fr 1fr;
    grid-template-rows: repeat(3, 100px);
}

.container-result div {
    background: lightblue;
    border: 2px solid #08f;
    border-radius: 6px;
    margin-bottom: 5%;
}

@media (width<500px) {
    .container {
        grid-template-columns: 1fr;
    }
}
</style>`;
  constructor(private exerciseService: ExerciseService){

  }
  ngOnInit(): void {

  }
}
