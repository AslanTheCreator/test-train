import React, { FC } from 'react';
import { ITrain } from '../../types/types';
import { useAppDispatch } from '../../store/hooks';
import { setSelectedTrain } from '../../store/train/slice';

interface ITrainItem {
  train: ITrain;
}

const TrainItem: FC<ITrainItem> = ({ train }) => {
  const dispatch = useAppDispatch();

  const handleTrainClick = () => {
    dispatch(setSelectedTrain(train));
  };

  return (
    <tr className="table__item__row" onClick={handleTrainClick}>
      <td>{train.name}</td>
      <td>{train.description}</td>
    </tr>
  );
};

export default TrainItem;
