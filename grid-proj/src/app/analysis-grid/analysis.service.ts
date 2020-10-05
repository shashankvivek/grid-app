import { IAnalysisData, ITransformedData } from './grid.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AnalysisService {
  transformData(data: IAnalysisData[]): ITransformedData[] {

    const transformedData: ITransformedData[] = data.map((obj) => {
      return { key: obj.key,
        element_values: obj.element_values.map(val => {
            const pipeVal  = val.format.split('.');
            if (pipeVal.length !== 2){
                throw new Error('unexpected format');
            }
            return {
                key: val.key,
                value: val.value,
                pipeFormat: `${pipeVal[0].length}.${pipeVal[1].length}-${pipeVal[1].length}`
            };
        })
      };
    });
    return transformedData;
  }
}
