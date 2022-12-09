import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SystemInitialState } from "./systemState";
import { Languages, setLanguage } from "../../../common/localization/localization";

const changeLang = createAsyncThunk<Languages, Languages>("menu/changeLanguage", async (language) => {
  await setLanguage(language);

  return language;
});

export const SystemActionsAsync = {
  changeLang,
};

export const { reducer: SystemReducer, actions: SystemActions } = createSlice({
  name: "system",
  initialState: SystemInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(changeLang.fulfilled, (state, action) => {
      state.language = action.payload;
    });
  },
});
