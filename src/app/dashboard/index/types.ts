import type { FormGroup, FormControl } from "@angular/forms";

export type DashboardIndexSettingsForm = FormGroup<{
  range: FormControl<string | null>;
  alwaysShowCalculated: FormControl<boolean | null>;
  showVolumeDiff: FormControl<boolean | null>;
  dataRange: FormControl<number | null>;
}>;

export interface DashboardConfig {
  alwaysShowCalculated?: boolean;
  showVolumeDiff?: boolean;
}
