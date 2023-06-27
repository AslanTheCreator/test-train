import { ITrain, ITrainSliceState } from './types';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTrain = createAsyncThunk(
  'train/fetchTrainStatus',
  async (_, { rejectWithValue, dispatch }) => {
    const response = await axios.get<ITrain[], { data: ITrain[] }>(
      'https://gist.githubusercontent.com/GlennMiller1991/152583a1bf1e057e8db06f5949ae3dda/raw/f84adf51092706ae0e7c0abc7589ad49800d8112/trains.json',
    );
    dispatch(setTrain(response.data));
  },
);

const initialState: ITrainSliceState = {
  train: [],
  selectedTrain: {} as ITrain,
};

export const trainSlice = createSlice({
  name: 'train',
  initialState,
  reducers: {
    setTrain(state, action: PayloadAction<ITrain[]>) {
      state.train = action.payload;
    },
    setSelectedTrain(state, action: PayloadAction<ITrain>) {
      state.selectedTrain = action.payload;
    },
  },
  extraReducers: {
    [fetchTrain.rejected.toString()]: () => {
      console.log('Произошла ошибка');
    },
  },
});

export const { setTrain, setSelectedTrain } = trainSlice.actions;
export default trainSlice.reducer;
