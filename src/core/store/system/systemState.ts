import { getLanguage, Languages } from "../../../common/localization/localization";

export type AppThemeType = "dark" | "light" | null;

export interface SystemState {
  isOnboardingVisited: boolean;
  language: Languages;
}

export const SystemInitialState: SystemState = {
  isOnboardingVisited: false,
  language: getLanguage(),
};
