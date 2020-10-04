export interface IElement_value {
  key: string;
  value: number;
  format: string;
}

export interface IAnalysisData {
  key: string;
  element_values: IElement_value[];
}
