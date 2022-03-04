import { Component, Input, OnInit } from '@angular/core';
import { Weapon } from '../../model/Weapon';

@Component({
  selector: 'app-weapon-item',
  templateUrl: './weapon-item.component.html',
  styleUrls: ['./weapon-item.component.scss']
})
export class WeaponItemComponent implements OnInit {

  @Input() weapon: Weapon | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
