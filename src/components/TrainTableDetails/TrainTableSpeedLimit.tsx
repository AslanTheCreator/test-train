import React, { FC, useState } from 'react';
import { Speed } from '../../store/train/types';

interface ITrainTableSpeedLimit {
  speed: Speed;
  index: number;
  onDataChange: (data: number, index: number) => void;
}

const TrainTableSpeedLimit: FC<ITrainTableSpeedLimit> = ({ speed, onDataChange, index }) => {
  const handleChangeInput = (value: string) => {
    const valueNumber = Number(value);
    onDataChange(valueNumber, index);
  };
  return (
    <tr className="table__item__row">
      <td>{speed.name}</td>
      <td>
        <input
          type="number"
          value={speed.speedLimit}
          onChange={(event) => handleChangeInput(event.target.value)}
        />
      </td>
    </tr>
  );
};

export default TrainTableSpeedLimit;
