import { WeaponType } from "./WeaponType";

export class Weapon {
    id: number | undefined;
    name: string | undefined;
    photo: string | undefined;
    weaponType: WeaponType | undefined;
    dexreq: number | undefined;
    strengreq: number | undefined;
    intreq: number | undefined;
    faithreq: number | undefined;
    arcanereq: number | undefined;
    dexscaling: string | undefined;
    strengscaling: string | undefined;
    intscaling: string | undefined;
    faithscaling: string | undefined;
    arcanescaling: string | undefined;
    weight: number | undefined;
    description: string | undefined;
}