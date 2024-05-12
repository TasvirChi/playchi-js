import { AdEventType, CustomEventType, Html5EventType } from "../playchi";

export type PCEventTypes = typeof Html5EventType & typeof CustomEventType & typeof AdEventType;
