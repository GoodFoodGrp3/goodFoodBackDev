import {Timestamp} from "rxjs";

export interface ErrorLogs {
  id: number,
  date: Timestamp<any>,
  source:string,
  errorStatus: string,
  message:string
}
