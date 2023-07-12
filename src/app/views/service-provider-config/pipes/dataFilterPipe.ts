import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {

  transform(array: any[], query: string , query1?: string): any {
    if (query) {
      return _.filter(array, row => row.searched != null && !(row.searched.toString().search(RegExp(query, 'i')) === -1))
    }
    return array;
  }
}