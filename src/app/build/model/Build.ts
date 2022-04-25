import { User } from "src/app/login/model/User";
import { Weapon } from "src/app/weapon/model/Weapon";
import { BuildClass } from "./BuildClass";
import { BuildState } from "./BuildState";

export class Build{
    id: number = 0;
    name: string = '';
    buildclass: BuildClass = new BuildClass;
    level: number = 0;
    dexterity: number = 0;
    strength: number = 0;
    intelect: number = 0;
    faith: number = 0;
    arcane: number = 0;
    weapon1: Weapon| null = null;
    weapon2: Weapon| null = null;
    createdby: User = new User;
    created: Date = new Date('');
    state: BuildState = new BuildState;
}