export type DialogEventType = 'afterclose' | 'beforeclose' | 'custom';
export type DialogType = 'window' | 'shy' | 'push';

export interface DialogEvent {
  type: DialogEventType;
  data: any;
}

export interface DialogConfig {
  type?: DialogType;
  classes?: string;
  inputs?: Record<string, any>;
}
