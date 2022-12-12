import {TypographyConfiguration} from "./types/ITypographyModuleConfiguration";
import {BaseConfigurableModule} from "../BaseConfigurableModule";

// noinspection JSUnusedGlobalSymbols
export class Typography extends BaseConfigurableModule<TypographyConfiguration> {
  constructor() {
    super();
  }

  public static get configuration(): TypographyConfiguration | undefined {
    return super.getConfiguration<TypographyConfiguration>();
  }

  configure(params: TypographyConfiguration) {
    super.configure(params);
  };
}

