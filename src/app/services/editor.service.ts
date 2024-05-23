import { Injectable, SecurityContext, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Base64Service } from './base64.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class EditorService {
  private editorBaseUrl   = environment.editorBaseUrl;
  private base64Service = inject(Base64Service);
  private sanitizer = inject(DomSanitizer);
  constructor() { }

  getUrlIde(html:string,js:string,css:string): string{
    html = this.base64Service.encode(html);
    js = this.base64Service.encode(js);
    css = this.base64Service.encode(css);
   return  `${this.editorBaseUrl}/${html}|${js}|${css}`
  }


}
