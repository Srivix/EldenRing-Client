import { Component, OnInit } from '@angular/core';
import { Weapon } from '../model/Weapon';
import { WeaponDetailComponent } from '../weapon-detail/weapon-detail.component';
import { WeaponService } from '../weapon.service';
import { MatDialog } from '@angular/material/dialog';
import { WeaponTypeService } from '../weapon-type.service';
import { WeaponType } from '../model/WeaponType';

@Component({
  selector: 'app-weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.scss']
})
export class WeaponListComponent implements OnInit {

  weapons: Weapon[] = [];
  weaponTypes: WeaponType[] = [];

  searchText: string ='';
  filterType: WeaponType = new WeaponType;

  constructor(
    private weaponService: WeaponService,
    private weaponTypeService: WeaponTypeService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.weaponService.getWeapons().subscribe(
      weapons => this.weapons = weapons
    );

    this.weaponTypeService.getWeaponTypes().subscribe(
      weaponTypes => this.weaponTypes = weaponTypes
    );
  }

  openDetail(weapon: Weapon){
    const dialogRef = this.dialog.open(WeaponDetailComponent,{
      data: { weapon: weapon}
    });
  }

  onCleanFilter(){
    this.filterType = new WeaponType;
    this.searchText = '';
  }

}
