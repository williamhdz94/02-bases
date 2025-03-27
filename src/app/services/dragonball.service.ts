import { effect, Injectable, signal } from '@angular/core';
import { ICharacter } from '../interfaces/ICharacter';

const loadFromLocalStorage = (): ICharacter[] => {
  const characters = localStorage.getItem('characters');

  return characters ? JSON.parse(characters) : [];
}

@Injectable({providedIn: 'root'})
export class DragonBallService {

  characters = signal<ICharacter[]>(loadFromLocalStorage());

  addCharacter(character: ICharacter) {
    this.characters.update(
      list => [ ...list, character ]
    );
  }

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  })

}
