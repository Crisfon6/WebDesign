import { Component, Input } from '@angular/core';
import { CodeEditorComponent, CodeRenderComponent } from 'ngx-components-lib-cf6';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-compiler',
  standalone: true,
  imports: [CodeRenderComponent,CodeEditorComponent],
  templateUrl: './compiler.component.html',
  styleUrl: './compiler.component.scss'
})
export class CompilerComponent {
  @Input() html = '';
  @Input() css = '';

  code(code:string,type: 'html' | 'css'){
    console.log(code);
    if(type==='html'){
      this.html= code;
    }else{
      this.css = `<style>${code}</style>`;
    }
  }
}
