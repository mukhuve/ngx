export type DialogType = 'window' | 'shy' | 'push';
export interface DialogConfig {
  type?: DialogType;
  classes?: string;
  inputs?: Record<string, any>;
}
