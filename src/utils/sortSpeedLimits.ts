import { Speed } from '../store/train/types';

export const sortSpeedLimits = (speedLimits: Speed[]) => {
  return speedLimits.slice().sort((a, b) => a.speedLimit - b.speedLimit);
};
