import { RehydrateAction } from "redux-persist/es/types";
import { RootState } from "../core/store/rootReducer";

export interface RehydrateAppAction extends RehydrateAction {
  payload?: RootState;
}
