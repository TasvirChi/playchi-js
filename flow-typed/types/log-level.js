// @flow
declare type PCLogLevelObject = {value: number, name: string};
declare type PCLogLevels = {[level: string]: PCLogLevelObject};
declare type PCLogLevelTypes = {[level: string]: string};
declare type LogHandlerType = (messages: any[], context: Object) => void;
declare type PCLogConfigObject = {
  level: string,
  handler: ?LogHandlerType
};
