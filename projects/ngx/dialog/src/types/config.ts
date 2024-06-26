export type DialogType = 'window' | 'shy' | 'push' | 'fullscreen';
export interface DialogConfig {
  type?: DialogType;
  classes?: string;
  disableAnimation?: boolean;
  inputs?: Record<string, any>;
}
