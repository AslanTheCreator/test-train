import { Speed } from '../store/train/types';

export const validateDataTrain = (speedLimits: Speed[]) => {
  return speedLimits.every((speed, index, array) => {
    if (index > 0 && speed.speedLimit <= array[index - 1].speedLimit) {
      return false;
    }

    if (!Number.isInteger(speed.speedLimit) || speed.speedLimit <= 0) {
      return false;
    }

    return true;
  });
};
