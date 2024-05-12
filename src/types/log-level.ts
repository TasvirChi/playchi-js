import {ILogHandler} from 'js-logger';

export type PCLogConfigObject = {
  level: string,
  handler?: ILogHandler
};
