import { Injectable } from '@angular/core';
import { encode,decode} from 'js-base64';
@Injectable({
  providedIn: 'root'
})
export class Base64Service {

  constructor() { }
  encode(code: string): string {
    return encode(code);
  }
}
