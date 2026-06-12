export enum MessageType {
  SUCCESS='Success',
  INFO='Info',
  WARNING='Warning',
  ERROR='Error'
}

export interface IMessage {
  id: number;
  type: MessageType;
}