import {Pipe, PipeTransform} from "@angular/core";

// INPUT DATE FORMAT: YYYY-MM-DDTHH:MM:SS.SSS
// OUTPUT DATE FORMAT: YYYY-MM-DD HH:MM:SS

@Pipe({
  name: 'ISODate'
})
export class ISODate implements PipeTransform {

  transform(value: string): string {
    return value.replace('T', ' ').slice(0, 19);
  }
}
