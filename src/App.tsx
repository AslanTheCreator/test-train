import React, { useEffect } from 'react';
import TrainTable from './components/TrainTable/TrainTable';
import TrainTableDetails from './components/TrainTableDetails/TrainTableDetails';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { fetchTrain } from './store/train/slice';

function App() {
  const dispatch = useAppDispatch();
  const selectedTrain = useAppSelector((state) => state.train.selectedTrain);

  useEffect(() => {
    dispatch(fetchTrain());
  }, []);

  return (
    <div className="wrapper">
      <TrainTable />
      {Object.keys(selectedTrain).length > 0 && <TrainTableDetails />}
    </div>
  );
}

export default App;
