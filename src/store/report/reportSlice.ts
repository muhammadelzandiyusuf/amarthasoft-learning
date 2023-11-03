import { Action, AnyAction, createAction, createSlice } from '@reduxjs/toolkit';

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

const setReportState = createAction<ReportDataState>('setReportState');

interface RejectedAction extends Action {
  error: Error;
}

function isRejectedAction(action: AnyAction): action is RejectedAction {
  return action.type.endsWith('rejected');
}

export const reportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {
    setReportState(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setReportState, (state, action) => {
        return {
          ...state,
          ...action.payload,
        };
      })
      .addMatcher(isRejectedAction, () => {})
      .addDefaultCase(() => {});
  },
});

export const selectReportState = (state: AppState) => state.report.data;

export default reportSlice.reducer;
