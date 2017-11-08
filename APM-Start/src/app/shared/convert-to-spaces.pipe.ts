

import { PipeTransform } from "@angular/core";
import { Pipe } from "@angular/core";

@Pipe({
    name: "convertToSpaces"
})
export class ConvertToSpaces implements PipeTransform {
    transform(value:string, character1:string, character2:string): string {
        return value.replace(character1,' ').replace(character2,' ');
    }
} 