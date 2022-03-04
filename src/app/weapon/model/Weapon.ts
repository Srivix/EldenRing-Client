import { WeaponType } from "./WeaponType";

export class Weapon {
    id: number | undefined;
    name: string | undefined;
    photo: string | undefined;
    weaponType: WeaponType | undefined;
    dexreq: number | undefined;
    strengreq: number | undefined;
    intreq: number | undefined;
}