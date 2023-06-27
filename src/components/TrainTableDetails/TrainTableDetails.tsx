import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import TrainTableSpeedLimit from './TrainTableSpeedLimit';
import { setSelectedTrain } from '../../store/train/slice';
import { ITrain } from '../../types/types';
import { validateDataTrain } from '../../utils/validateDataTrain';
import { sortSpeedLimits } from '../../utils/sortSpeedLimits';

const TrainTableDetails: FC = () => {
  const selectedTrain = useAppSelector((state) => state.train.selectedTrain);
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    const sortedSpeedLimits = sortSpeedLimits(selectedTrain.speedLimits);
    const sortedSelectedTrain = { ...selectedTrain, speedLimits: sortedSpeedLimits };
    const isValid = validateDataTrain(sortedSelectedTrain.speedLimits);
    if (isValid) {
      console.log('Данные успешно отправлены ', sortedSelectedTrain);
    } else {
      console.log('Ошибка, неккоректные данные');
    }
  };

  const handleDataChange = (newSpeedLimit: number, index: number) => {
    const updateSpeedLimits = selectedTrain.speedLimits.map((speed, i) => {
      if (i === index) {
        return { ...speed, speedLimit: newSpeedLimit };
      }
      return speed;
    });
    const updatedSelectedTrain: ITrain = { ...selectedTrain, speedLimits: updateSpeedLimits };
    dispatch(setSelectedTrain(updatedSelectedTrain));
  };

  return (
    <div className="train-table train-table-details">
      <h2>Ограничение по скорости</h2>
      <h3> {selectedTrain.name}</h3>
      <table className="table">
        <thead className="table__header">
          <tr>
            <th>Название</th>
            <th>Ограничение скорости</th>
          </tr>
        </thead>
        <tbody>
          {selectedTrain.speedLimits &&
            selectedTrain.speedLimits.map((speed, index) => (
              <TrainTableSpeedLimit
                onDataChange={handleDataChange}
                speed={speed}
                key={speed.name}
                index={index}
              />
            ))}
        </tbody>
      </table>
      <div className="button__area">
        <button className="button" onClick={handleButtonClick}>
          Отправить данные
        </button>
      </div>
    </div>
  );
};

export default TrainTableDetails;
