import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { REHYDRATE } from "redux-persist/es/constants";
import { Languages, setLanguage } from "../../../common/localization/localization";
import { newState } from "../../../common/utils";
import { RehydrateAppAction } from "../../../types";
import { SystemInitialState, SystemState } from "./systemState";

const changeLang = createAsyncThunk<Languages, Languages>("menu/changeLanguage", async (language) => {
  await setLanguage(language);

  return language;
});

export const SystemActionsAsync = {
  changeLang,
};

function rehydrate(state: SystemState, rehydrateParams: RehydrateAppAction) {
  return newState(rehydrateParams.payload?.system || state, {
    isOnboardingVisited: rehydrateParams.payload != null,
  });
}

export const { reducer: SystemReducer, actions: SystemActions } = createSlice({
  name: "system",
  initialState: SystemInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(REHYDRATE, rehydrate);
    builder.addCase(changeLang.fulfilled, (state, action) => {
      state.language = action.payload;
    });
  },
});
