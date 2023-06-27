export interface ITrainSliceState {
  train: ITrain[] | null;
  selectedTrain: ITrain;
}

export interface ITrain {
  name: string;
  description: string;
  speedLimits: Speed[];
}

export type Speed = {
  name: string;
  speedLimit: number;
};
