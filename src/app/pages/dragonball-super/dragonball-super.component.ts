import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { DragonBallService } from '../../services/dragonball.service';

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

  public dragonBallService = inject(DragonBallService);

}
