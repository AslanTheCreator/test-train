import React, { FC } from 'react';
import TrainItem from './TrainItem';
import { useAppSelector } from '../../store/hooks';

const TrainTable: FC = () => {
  const trainData = useAppSelector((state) => state.train.train);
  return (
    <div className="train-table">
      <h2 className="train-table__title">Поезда</h2>
      <table className="train-table__table table">
        <thead className="table__header">
          <tr>
            <th>Название</th>
            <th>Описание</th>
          </tr>
        </thead>
        <tbody className="table__item">
          {trainData !== null ? (
            trainData.map((train) => <TrainItem key={train.name} train={train} />)
          ) : (
            <p>Загрузка данных...</p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TrainTable;
