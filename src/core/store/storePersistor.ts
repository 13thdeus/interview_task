import { persistStore } from "redux-persist";
import { store } from "./store";
import { setLanguage } from "../../common/localization/localization";

export const persistor = persistStore(
  store,
  undefined,
  async () => {
    const state = store.getState();
    await setLanguage(state.system.language);
  },
);
// persistor.purge();
