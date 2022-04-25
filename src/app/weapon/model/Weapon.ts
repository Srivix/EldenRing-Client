import { WeaponType } from "./WeaponType";

export class Weapon {
    id: number = 0;
    name: string = '';
    photo: string = '';
    weaponType: WeaponType = new WeaponType;
    dexReq: number = 0;
    strengReq: number = 0;
    intReq: number = 0;
    faithReq: number = 0;
    arcaneReq: number = 0;
    dexScaling: string = '';
    strengScaling: string = '';
    intScaling: string = '';
    faithScaling: string = '';
    arcaneScaling: string = '';
    weight: number = 0;
    description: string = '';
}