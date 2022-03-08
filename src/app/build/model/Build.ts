import { Weapon } from "src/app/weapon/model/Weapon";
import { BuildClass } from "./BuildClass";

export class Build{
    id: number = 0;
    name: string = '';
    buildclass: BuildClass = new BuildClass;
    level: number = 0;
    hp: number = 0;
    fp: number = 0;
    stamina: number = 0;
    vigor: number = 0;
    mind: number = 0;
    endurance: number = 0;
    dexterity: number = 0;
    strength: number = 0;
    intelect: number = 0;
    faith: number = 0;
    arcane: number = 0;
    weapon1: Weapon = new Weapon;
    weapon2: Weapon = new Weapon;
}