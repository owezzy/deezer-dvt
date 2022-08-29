import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'convertDuration'
})
export class ConvertDurationPipe implements PipeTransform {

  transform(seconds: number): unknown {
      seconds = Number(seconds);
      const d = Math.floor(seconds / (3600 * 24));
      const h = Math.floor(seconds % (3600 * 24) / 3600);
      const m = Math.floor(seconds % 3600 / 60);
      const s = Math.floor(seconds % 60);

      // const dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
      // const hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
      const mDisplay = m > 0 ? m :"";
      const sDisplay = s > 0 ? s : "";
      return `${mDisplay}:${sDisplay}`;
    }

}
