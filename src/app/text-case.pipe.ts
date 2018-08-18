import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textCase'
})
export class TextCasePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    let words = value.split(' ');
   
    let prepositions = [
      "the",
      "of"
    ];
    for (var i=0; i<words.length; i++){
      if(!this.isPreposition(words[i])||i==0){
      words[i] = this.fixCase(words[i]);
      } else {
        words[i]= words[i].toLowerCase();
      }
    }


    return words.join(' ');
  }

  private isPreposition(word:string) : boolean{
    let prepositions = [
      "the",
      "of"
    ];
    return prepositions.includes(word.toLowerCase());
  }

  private fixCase(word:string): string{
    return word.substring(0,1).toUpperCase() 
    + word.substring(1).toLowerCase();
  }

}
