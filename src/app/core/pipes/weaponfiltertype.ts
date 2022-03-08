
import { Pipe, PipeTransform } from '@angular/core';
import { Weapon } from 'src/app/weapon/model/Weapon';
import { WeaponType } from 'src/app/weapon/model/WeaponType';

@Pipe({ name: 'appFilterType' })
export class FilterTypePipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(weapons: Weapon[], searchType: WeaponType): any[] {
    if (!weapons) {
      return [];
    }
    if (!searchType) {
      return weapons;
    }

    return weapons.filter(weapon => {
        return weapon.weaponType.name.includes(searchType.name);
    });
  }
}