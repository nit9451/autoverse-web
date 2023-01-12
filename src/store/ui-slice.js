import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  test: false,
  isChildUpdate: false,
  isProjectChildUpdate: false,
};

export const uiReducer = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    testAction: (state, action) => ({
      ...state,
      test: action.payload
    }),
    childUpdateAction: (state, action) => ({
      ...state,
      isChildUpdate: !state.isChildUpdate
    }),
    projectChildUpdateAction: (state, action) => ({
      ...state,
      isProjectChildUpdate: !state.isProjectChildUpdate
    })
  },
});
export const {
    testAction,
    childUpdateAction,
    projectChildUpdateAction
} = uiReducer.actions;
export default uiReducer.reducer;