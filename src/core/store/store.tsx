import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {PersistConfig, persistReducer} from "redux-persist";
import {createLogger, ReduxLoggerOptions} from "redux-logger";
import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {rootReducer, RootState} from "./rootReducer";

const options: ReduxLoggerOptions = {
  diff: true,
  collapsed: true,
  predicate: (): boolean => {
    return __DEV__;
  },
};
const logger = createLogger(options);

const persistConfig: PersistConfig<RootState> = {
  key: "root",
  storage: AsyncStorage,
  debug: __DEV__,
  version: 1,
  timeout: 5000,
  // migrate: storeMigrations, // todo: implement migrations
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
    .concat(logger),
    // .concat(Api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
