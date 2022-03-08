import { WeaponType } from "./WeaponType";

export class Weapon {
    id: number = 0;
    name: string = '';
    photo: string = '';
    weaponType: WeaponType = new WeaponType;
    dexreq: number = 0;
    strengreq: number = 0;
    intreq: number = 0;
    faithreq: number = 0;
    arcanereq: number = 0;
    dexscaling: string = '';
    strengscaling: string = '';
    intscaling: string = '';
    faithscaling: string = '';
    arcanescaling: string = '';
    weight: number = 0;
    description: string = '';
}