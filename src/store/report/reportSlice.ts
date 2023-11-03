import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { AppState } from '@/store/store';

export interface ReportDataState {
  data: Array<{
    month: string;
    week: number;
    numberOfSales: number;
    profit: number;
    revenue: number;
    cost: number;
  }>;
}

const initialState: ReportDataState = {
  data: [],
};

export const reportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {
    setReportState(state, action) {
      state.data = action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.report,
      };
    },
  },
});

export const { setReportState } = reportSlice.actions;

export const selectReportState = (state: AppState) => state.report.data;

export default reportSlice.reducer;
