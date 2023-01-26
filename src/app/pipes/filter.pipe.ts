import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], selectedStatut: string): any[] {
    if (!selectedStatut.length) return value;

    let newTab = [];
    for (const serv of value) {
      if (serv['statut'] == selectedStatut) newTab.push(serv);
    }
    return newTab;
  }
}
