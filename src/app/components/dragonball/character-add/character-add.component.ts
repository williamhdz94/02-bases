import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { ICharacter } from '../../../interfaces/ICharacter';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {

  name = signal('');
  power = signal(0);
  newCharacter = output<ICharacter>();

  addCharacter() {
      if ( !this.name() || !this.power() || this.power() <=0 ) {
        return;
      }

      const newCharacter: ICharacter = {
        id: Math.floor(Math.random() * 1000),
        name: this.name(),
        power: this.power()
      }

      this.newCharacter.emit(newCharacter);
      this.resetFields();
    }

    resetFields() {
      this.name.set('');
      this.power.set(0);
    }

}
