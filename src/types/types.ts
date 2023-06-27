export interface ITrain {
  name: string;
  description: string;
  speedLimits: Speed[];
}

type Speed = {
  name: string;
  speedLimit: number;
};
