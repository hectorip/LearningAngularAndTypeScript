import { Component } from '@angular/core';


export class Word {
  id: number;
  word: string;
  definition: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{word.word}}</h1>
    <p>Definition: {{word.definition}} </p>
  `,
})
export class AppComponent  {
  word: Word = {
    word: "typescript",
    id: 1,
    definition: "ES Superset typed language"
  }
}
