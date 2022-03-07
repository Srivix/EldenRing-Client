
import { Pipe, PipeTransform } from '@angular/core';
import { Weapon } from 'src/app/weapon/model/Weapon';

@Pipe({ name: 'appFilterText' })
export class FilterNamePipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(weapons: Weapon[], searchText: string): any[] {
    if (!weapons) {
      return [];
    }
    if (!searchText || searchText=='') {
      return weapons;
    }
    searchText = searchText.toLocaleLowerCase();

    return weapons.filter(weapon => {
      return weapon.name.toLocaleLowerCase().includes(searchText);
    });
  }
}