import {LabelConfig} from "./LabelConfig";
import {LabelSizes} from "./LabelSizes";
import {LabelTypes} from "./LabelTypes";

type SectionConfig = {
  [P in LabelSizes]?: LabelConfig;
};

export type TypographyConfiguration = {
  [P in LabelTypes]?: SectionConfig;
};
