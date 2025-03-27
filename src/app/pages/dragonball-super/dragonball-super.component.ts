import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { ICharacter } from '../../interfaces/ICharacter';
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";

@Component({
  selector: 'app-dragonball-super',
  imports: [
    NgClass,
    CharacterListComponent,
    CharacterAddComponent
],
  templateUrl: './dragonball-super.component.html',
  styleUrl: './dragonball-super.component.css'
})
export class DragonballSuperComponent {

  characters = signal<ICharacter[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 }
  ]);

  addCharacter(character: ICharacter) {
    this.characters.update(
      list => [ ...list, character ]
    );
  }

}
