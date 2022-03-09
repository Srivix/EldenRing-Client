import { Pageable } from "src/app/core/model/page/Pageable";
import { Build } from "./Build";

export class BuildPage {
    content: Build[] = [];
    pageable: Pageable = new Pageable;
    totalElements: number = 0;
}