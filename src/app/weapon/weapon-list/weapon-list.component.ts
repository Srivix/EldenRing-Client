import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Weapon } from '../model/Weapon';
import { WeaponService } from '../weapon.service';

@Component({
  selector: 'app-weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.scss']
})
export class WeaponListComponent implements OnInit {

  weapons: Weapon[] | undefined;

  dataSource = new MatTableDataSource<Weapon>();
  displayedColumns: string[] = ['foto', 'id', 'name', 'weaponType', 'dexreq', 'strengreq', 'intreq','action'];

  constructor(
    private weaponService: WeaponService,
  ) { }

  ngOnInit(): void {
    this.weaponService.getWeapons().subscribe(
      weapons => this.weapons = weapons
    )
  }

}
