import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { ICharacter } from '../../interfaces/ICharacter';

@Component({
  selector: 'app-dragonball-super',
  imports: [
    NgClass,
    CharacterListComponent
],
  templateUrl: './dragonball-super.component.html',
  styleUrl: './dragonball-super.component.css'
})
export class DragonballSuperComponent {

  name = signal('');
  power = signal(0);

  characters = signal<ICharacter[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 }
  ]);

  // powerClass = computed(() => {
  //   return {
  //     'text-danger': true,
  //   }
  // })

  addCharacter() {
    if ( !this.name() || !this.power() || this.power() <=0 ) {
      return;
    }

    const newCharacter: ICharacter = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }

    this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

}
