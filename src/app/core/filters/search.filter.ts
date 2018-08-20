import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";

@Pipe({
    name: 'searchFilter',
    pure: false
})
export class SearchFilterPipe implements PipeTransform {
    transform(items: any[], term: string, value: any): any[] {
        if (!term) return items;
        return items.filter(item => {
            return Object.keys(item).some(
                k => {
                    if (item[k] != null && item[k] != undefined && typeof item[k] == 'string')
                        return item[k].toLowerCase().includes(term.toLowerCase());
                }
            );
        });
    }
}