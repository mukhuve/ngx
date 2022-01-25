export type DialogEventType = 'afterclose' | 'beforeclose' | 'custom';
export interface DialogEvent {
  type: DialogEventType;
  data: any;
}
