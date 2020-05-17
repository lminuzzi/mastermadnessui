import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChooseNameService {
  private fixedNames : string[] = ['Betina', 'Duda', 'Anita', 'Ana', 'Ana Clara']

  constructor() { }

  getNames(numberOfNames : number) : string[] {
    const namesArr = ['Marcela', 'Natália', 'Serafina', 'Nice', 'Lola', 'Rafa', 'Camila', 'Gi', 'Rosa', 'Pam', 'Lara', 'Evelina', 
      'Dirce', 'Monalisa', 'Rô', 'Rê', 'Anastacia', 'Elsa', 'Bela', 'Mulan', 'Jasmine', 'Ariel', 'Bela', 'Merida', 'Tiana', 'Luiza']
    
    if(numberOfNames > namesArr.length) {
      numberOfNames = namesArr.length - 1
    }

    let names : string[] =  namesArr
      .map((a) => ({sort: Math.random(), value: a}))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value)
      .slice(0, numberOfNames)
    
    this.getIndexes(names.length).forEach((currentIndex) => {
      names[currentIndex] = this.fixedNames.pop();
    })
    
    return names
  }

  private getIndexes(arrLength) : Set<number>{
    let indexes = new Set<number>();

    while(indexes.size < this.fixedNames.length) {
      indexes.add(Math.floor(Math.random() * arrLength));
    }

    return indexes
  }
}
