import { Component, input } from '@angular/core';
import { ICharacter } from '../../../interfaces/ICharacter';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {

  characters = input.required<ICharacter[]>();

}
